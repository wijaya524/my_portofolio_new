"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useTheme } from "next-themes";

import Mypicture from "../../components/images/my-picture.png";
import Aos from "aos";

// Registrasi plugin GSAP
gsap.registerPlugin(TextPlugin);

const CircuitEffect = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>(
    [],
  );

  useEffect(() => {
      Aos.init({ duration: 1000, once: false });
    setPositions(
      Array.from({ length: 8 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      })),
    );

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
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
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      gsap.to(textRef.current, {
        text: "Welcome to my Portfolio",
        duration: 3,
        ease: "power1.out",
        repeat: 0,
      });
    }
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section
      className={`relative w-full h-screen flex justify-center items-center body-font overflow-hidden ${
        !mounted
          ? "bg-white text-gray-800"
          : currentTheme === "dark"
            ? "bg-black text-gray-200"
            : "bg-white text-gray-800"
      }`}
    >
      {/* Efek Latar Belakang */}
      <CircuitEffect />

      {/* Container Flex */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 px-6">
        {/* Text Section */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-5xl font-extrabold bg-gradient-to-bl
from-purple-600
via-violet-700
to-violet-900
bg-clip-text
text-transparent dark:text-cyan-400 cursor-pointer">
            <span ref={textRef} />
          </h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg mt-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          >
            Step into the future of digital experiences. Explore my innovative
            projects and creative journey.
          </motion.p>
        </div>

        {/* Floating Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          className="md:w-1/2 flex justify-center"
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            alt="hero"
            className="object-cover object-center rounded-lg shadow-lg shadow-fuchsia-900 dark:shadow-cyan-500/50"
            height={500}
           data-aos="zoom-in"
            src={Mypicture}
            width={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
