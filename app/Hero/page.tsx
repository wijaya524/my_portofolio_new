"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import { useTheme } from "next-themes";
import Aos from "aos";

import Mypicture from "../../components/images/my-picture.png";

// Registrasi plugin GSAP
gsap.registerPlugin(SplitText);

const CircuitEffect = () => {
  const [positions, setPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
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
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      const split = new SplitText(textRef.current, { type: "words,chars" });

      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.05, // Efek mengetik satu per satu
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section
      className={`relative  w-full h-screen flex justify-center items-center body-font overflow-hidden ${
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
        <div className="md:w-1/2 text-left flex flex-col gap-4 ">
          <div
            ref={textRef}
            className=" text-4xl  md:text-6xl font-extrabold cursor-pointer"
          >
            <span className="dark:text-[#ECEDEE]">Welcome to My</span>{" "}
            <span className="text-[#D933F8] dark:text-cyan-400">Portfolio</span>
          </div>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg mt-4 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 3, ease: "easeOut" }}
          >
            Step into the future of digital experiences. Explore my innovative projects and creative journey.
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
            data-aos="zoom-in"
            height={500}
            src={Mypicture}
            width={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
