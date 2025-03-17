/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    name: "HTML",
    color: "#E44D26",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    name: "CSS",
    color: "#1572B6",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    name: "React",
    color: "#61DAFB",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    name: "Next.js",
    color: "#000000",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    color: "#47A248",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    name: "MySQL",
    color: "#4479A1",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    name: "Express.js",
    color: "#000000",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg",
    name: "Laravel",
    color: "#FF2D20",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
    color: "#7952B3",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    name: "Git",
    color: "#F05032",
  },
];

const SkillsPage = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([]);
  const [isAndroid, setIsAndroid] = useState(false);

  // Deteksi perangkat Android
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isAndroidDevice = /android/i.test(userAgent);

    setIsAndroid(isAndroidDevice);

    // Inisialisasi AOS hanya pada perangkat non-Android
    if (!isAndroidDevice) {
      AOS.init({
        duration: 800,
        once: true, // Set ke true untuk menjalankan animasi hanya sekali
      });
    }
  }, []);

  // Hitung posisi item skill untuk koneksi kabel
  useEffect(() => {
    if (!containerRef.current) return;

    const updatePositions = () => {
      if (!containerRef.current) return;

      const skillElements =
        containerRef.current.querySelectorAll(".skill-item");
      const newPositions = Array.from(skillElements).map((el: any) => {
        const rect = el.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
          width: rect.width,
          height: rect.height,
        };
      });

      setPositions(newPositions);
    };

    // Gunakan ResizeObserver untuk memantau perubahan ukuran dengan lebih efisien
    const resizeObserver = new ResizeObserver(updatePositions);

    resizeObserver.observe(containerRef.current);

    // Initial calculation dengan delay
    const timer = setTimeout(updatePositions, 300);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Fungsi untuk menggambar koneksi kabel
  const drawConnections = () => {
    if (positions.length === 0) return null;

    const connections = [];
    // Sesuaikan maxDistance berdasarkan ukuran layar untuk responsivitas
    const maxDistance = window.innerWidth < 768 ? 200 : 300;

    // Variabel untuk menyimpan definisi gradien
    const gradients = [];

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const pos1 = positions[i];
        const pos2 = positions[j];

        // Hitung jarak antar skill
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          // Opacity berdasarkan jarak (lebih jauh = lebih transparan)
          const opacity = 1 - distance / maxDistance;

          // Dapatkan warna untuk gradien
          const color1 = skills[i].color;
          const color2 = skills[j].color;
          const gradientId = `gradient-${i}-${j}`;

          // Tambah definisi gradien
          gradients.push(
            <linearGradient
              key={gradientId}
              id={gradientId}
              x1="0%"
              x2="100%"
              y1="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor={color1} />
              <stop offset="100%" stopColor={color2} />
            </linearGradient>
          );

          // Tambah koneksi kabel
          connections.push(
            <line
              key={`line-${i}-${j}`}
              stroke={`url(#${gradientId})`}
              strokeOpacity={opacity * 0.7}
              strokeWidth={1.5}
              x1={pos1.x}
              x2={pos2.x}
              y1={pos1.y}
              y2={pos2.y}
            />
          );
        }
      }
    }

    return (
      <>
        <defs>{gradients}</defs>
        {connections}
      </>
    );
  };

  // Tentukan class dan atribut data-aos berdasarkan perangkat
  const getAnimationProps = (index: number) => {
    if (isAndroid) {
      return {}; // Tidak ada animasi di Android
    }

    return {
      "data-aos": "zoom-in",
      "data-aos-delay": Math.min(index * 50, 500), // Batasi delay maksimum
    };
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center rounded-xl text-white p-4 sm:p-6 lg:p-10 relative overflow-hidden bg-[#FEFEFE] dark:bg-gray-900"
      id="skills"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20" />

      <h1
        className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 z-10 relative"
        {...(isAndroid ? {} : { "data-aos": "fade-down" })}
      >
        <section className="text-4xl font-bold flex gap-2">
          <p className="text-[#11181C] dark:text-[#FFFF]">My</p>
          <h1 className=" text-[#FF8A59]">Skills</h1>
        </section>
      </h1>

      {/* Container untuk skills dan koneksi */}
      <div ref={containerRef} className="w-full max-w-6xl mx-auto relative">
        {/* SVG untuk koneksi */}
        <svg className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          {drawConnections()}
        </svg>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 relative z-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item relative group"
              {...getAnimationProps(index)}
            >
              <div className="relative dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 flex flex-col items-center justify-center border border-gray-700 hover:translate-y-1 hover:scale-105 transition-transform duration-300 hover:shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-blue-400/10 to-purple-600/10 rounded-lg" />

                <div className="relative z-10 mb-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 relative flex items-center justify-center">
                    <div className="absolute inset-0 dark:bg-gray-700 rounded-full" />
                    <Image
                      alt={skill.name}
                      className="object-contain relative z-10 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                      height={isAndroid ? 56 : 64}
                      src={skill.src}
                      width={isAndroid ? 56 : 64}
                    />
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-medium tracking-wider text-center text-[#11181C] dark:text-slate-100">
                  {skill.name}
                </span>

                {/* Dots di sudut-sudut (permanent, tidak perlu hover) */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full shadow-glow" />
                <div className="absolute top-1 right-1 w-1 h-1 bg-purple-400 rounded-full shadow-glow" />
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400 rounded-full shadow-glow" />
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-indigo-400 rounded-full shadow-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global styles */}

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: radial-gradient(
            circle,
            #4b5563 1px,
            transparent 1px
          );
          background-size: 30px 30px;
        }

        .shadow-glow {
          box-shadow: 0 0 4px 1px currentColor;
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
