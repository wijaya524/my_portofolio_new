"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "next-themes";
import Aos from "aos";

import Mypicture from "../../components/images/my-picture.png";

const CircuitEffect = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    []
  );

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    setPositions(
      Array.from({ length: 8 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  return (
    <div
      className="absolute inset-0 flex justify-center items-center"
      id="hero"
    >
      <div className="relative w-full h-full">
        {positions.map((pos, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, 10, -10] }}
            className="absolute bg-fuchsia-600 dark:bg-cyan-400 opacity-20 w-[2px] h-[100px]"
            style={pos}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
};

const HeroPage = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

  const [showText, setShowText] = useState(false); // State untuk mengontrol tampilan teks

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowText(true); // Aktifkan teks setelah delay
    }, 3000); // Delay 3 detik

    return () => clearTimeout(delay); // Bersihkan timeout saat komponen unmount
  }, []);

  useEffect(() => {
    setMounted(true);

    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  // Pisahkan teks sebelum dan setelah "Portfolio"
  const beforePortfolio = text.replace("Portfolio", "").trim();
  const isTypingPortfolio = text.includes("Portfolio");

  return (
    <section
      className={`relative w-full min-h-screen flex justify-center items-center overflow-hidden ${
        !mounted
          ? "bg-white text-gray-800"
          : currentTheme === "dark"
            ? "bg-black text-gray-200"
            : "bg-white text-gray-800"
      }`}
      suppressHydrationWarning={true}
    >
      <CircuitEffect />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 px-6">
        <header className="md:w-1/2 text-left flex flex-col gap-4">
          {/* Animasi typing untuk judul */}
          <h1 className="text-4xl md:text-6xl font-extrabold">
            {beforePortfolio}{" "}
            {isTypingPortfolio && (
              <span className="text-[#D933F8] dark:text-cyan-400">
                Portfolio
              </span>
            )}
            {text.length < fullText.length && (
              <span className="animate-blink">|</span>
            )}
          </h1>

          {/* Efek Typewriter yang sudah ada */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300">
            {showText && (
              <Typewriter
                cursor
                cursorStyle="|"
                delaySpeed={1500}
                deleteSpeed={30}
                loop={0}
                typeSpeed={50}
                words={[
                  "I'm a Web Developer",
                  "I'm a UI/UX Designer",
                  "I Build Digital Experiences",
                ]}
              />
            )}
          </h2>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg mt-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          >
            Step into the future of digital experiences. Explore my innovative
            projects and creative journey.
          </motion.p>
        </header>
        <figure>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              priority
              alt="Portrait of Aryansyah Yudha Wijaya"
              className="object-cover object-center rounded-lg shadow-md shadow-fuchsia-800 dark:shadow-cyan-500"
              fetchPriority="high"
              height={500}
              loading="eager"
              placeholder="blur"
              src={Mypicture}
              width={500}
            />
          </motion.div>
        </figure>
      </div>
    </section>
  );
};

export default HeroPage;
