/* eslint-disable prettier/prettier */
"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import express from "@/public/images/express-js.png"

const SkillsPage = () => {
  const skills = useMemo(
    () => [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", name: "HTML", color: "#E44D26" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", name: "CSS", color: "#1572B6" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", name: "JavaScript", color: "#F7DF1E" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", name: "React", color: "#61DAFB" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", name: "Next.js", color: "#000000" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", name: "MongoDB", color: "#47A248" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", name: "MySQL", color: "#4479A1" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", color: "#06B6D4" },
      { src: express, name: "Express.js", color: "#fff" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg", name: "Laravel", color: "#FF2D20" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap", color: "#7952B3" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", name: "Git", color: "#F05032" },
    ],
    []
  );

  const containerRef = useRef(null);
  const positionsRef = useRef([] as { x: number; y: number }[]);
  const [, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/android/i.test(navigator.userAgent.toLowerCase()));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const updatePositions = useCallback(() => {
    const container = containerRef.current;

    if (!container) return;

    const skillElements = Array.from(container.querySelectorAll(".skill-item"));
    const containerRect = container.getBoundingClientRect();

    positionsRef.current = skillElements.map((el) => {
      const rect = el.getBoundingClientRect();

      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => requestAnimationFrame(updatePositions));

    if (containerRef.current) observer.observe(containerRef.current);
    updatePositions();

    return () => observer.disconnect();
  }, [updatePositions]);

  const drawConnections = useMemo(() => {
    if (positionsRef.current.length === 0) return null;
    const maxDistance = window.innerWidth < 768 ? 200 : 300;
    const connections: JSX.Element[] = [];
    const gradients: JSX.Element[] = [];

    positionsRef.current.forEach((pos1, i) => {
      for (let j = i + 1; j < positionsRef.current.length; j++) {
        const pos2 = positionsRef.current[j];
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          const color1 = skills[i].color;
          const color2 = skills[j].color;
          const gradientId = `gradient-${i}-${j}`;

          gradients.push(
            <linearGradient key={gradientId} id={gradientId} x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          );

          connections.push(
            <line key={`line-${i}-${j}`} stroke={`url(#${gradientId})`} strokeOpacity={opacity * 0.7} strokeWidth={1.5} x1={pos1.x} x2={pos2.x} y1={pos1.y} y2={pos2.y} />
          );
        }
      }
    });

    return (
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        {gradients}
        {connections}
      </svg>
    );
  }, [skills]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-28 p-10 relative overflow-hidden" id="skills">
      <header className="text-center ">
        <h1 className="text-2xl md:text-5xl font-bold text-[#11181C] dark:text-white" data-aos="fade-up">
          My <span className="text-[#FF8A59]">Skills</span>
        </h1>
      </header>

      <div ref={containerRef} className="w-full max-w-6xl mx-auto relative">
        {drawConnections}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative">
          {skills.map((skill, index) => (
            <article key={index} className="skill-item group" data-aos="zoom-in" data-aos-delay={index * 100}>
              <figure className="dark:bg-[#111113]  p-4 rounded-lg text-center border border-gray-700 hover:scale-105 transition-transform duration-300 shadow-lg">
                <Image alt={skill.name} color={skill.color} className="mx-auto" height={64} src={skill.src} width={64} />
                <figcaption className="text-sm font-medium mt-2 block text-[#11181C] dark:text-slate-100">{skill.name}</figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
