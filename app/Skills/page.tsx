"use client";
import { Tooltip } from "@heroui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    name: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    name: "MySQL",
  },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", 
    name: "Tailwind CSS" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    name: "Express.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
    name: "Laravel"
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
  }
];

const SkillsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Durasi animasi
      once: false,   // Animasi dapat dimainkan kembali
    });
  }, []);

  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center  text-white p-10">
      <h1 className="text-4xl font-bold mb-10" data-aos="fade-down">
        My Skills
      </h1>
      
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg p-5 flex justify-center items-center transition-transform transform hover:scale-110 hover:shadow-xl duration-200"
            data-aos="zoom-in"
            data-aos-delay={index * 200} // Efek muncul berurutan setiap 200ms
          >
            <Tooltip content={skill.name}>
              <Image
                src={skill.src}
                width={100}
                height={100}
                alt={skill.name}
                className="mb-2 object-contain"
              />
            </Tooltip>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
