/* eslint-disable prettier/prettier */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "next-themes";
import Aos from "aos";

import Mypicture from "../../components/images/my-picture.webp";

import { useLanguage } from "@/context/LanguageContext";

const CircuitEffect = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    [],
  );

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    setPositions(
      Array.from({ length: 8 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
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
  const { t, language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const fullText = t("hero.welcome");

  const [showText, setShowText] = useState(false); // State untuk mengontrol tampilan teks

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowText(true);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let i = 0;

    setText("");
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [fullText]);

  const currentTheme = theme === "system" ? systemTheme : theme;

  const renderWelcomeTitle = () => {
    const highlightWord = language === "en" ? "Portfolio" : "Portofolio";
    const highlightIndex = text.indexOf(highlightWord);

    if (highlightIndex === -1) {
      return (
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {text}
          {text.length < fullText.length && (
            <span className="animate-blink">|</span>
          )}
        </h1>
      );
    }

    const beforePart = text.slice(0, highlightIndex);
    const typedHighlightPart = text.slice(
      highlightIndex,
      highlightIndex + highlightWord.length,
    );
    const afterPart = text.slice(highlightIndex + highlightWord.length);

    return (
      <h1 className="text-4xl md:text-6xl font-extrabold">
        {beforePart}
        <span className="text-[#D933F8] dark:text-cyan-400">
          {typedHighlightPart}
        </span>
        {afterPart}
        {text.length < fullText.length && (
          <span className="animate-blink">|</span>
        )}
      </h1>
    );
  };

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
          <div className="min-h-[120px] md:min-h-[160px] flex items-center">
            {renderWelcomeTitle()}
          </div>

          {/* Efek Typewriter yang sudah ada */}
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 min-h-[40px] md:min-h-[48px]">
            {showText && (
              <Typewriter
                key={language}
                cursor
                cursorStyle="|"
                delaySpeed={1500}
                deleteSpeed={30}
                loop={0}
                typeSpeed={50}
                words={[
                  t("hero.typewriter1"),
                  t("hero.typewriter2"),
                  t("hero.typewriter3"),
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
            {t("hero.description")}
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
