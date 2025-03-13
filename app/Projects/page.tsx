/* eslint-disable prettier/prettier */
"use client";
import {
  Card,
  CardFooter,
  CardHeader,
  Divider,
  CardBody,
  Link,
} from "@heroui/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Jombang from "../../components/images/Jombang.png";
import ScrollButton from "@/components/arrow";


export default function Projects() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

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
      className="min-h-screen flex items-center justify-center flex-col gap-10 py-16"
      id="projects"
    >
      <span data-aos="fade-down">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </h1>
      </span>
      <div className=" py-16">
        <div
          className="card-container transition-all duration-500 ease-out transform-gpu"
          data-aos="fade-up-right"
          onMouseEnter={() => setActiveCard("siades")}
          onMouseLeave={() => setActiveCard(null)}
        >
          <Card
            className={`max-w-[400px]  relative backdrop-blur-md bg-opacity-20 bg-gray-800 border border-gray-700 shadow-lg transition-all duration-500 ease-out transform-gpu ${
              activeCard === "siades"
                ? "scale-105 shadow-xl shadow-blue-500/30 border-blue-400/50"
                : "scale-100 hover:shadow-blue-500/10"
            }`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 rounded-lg transition-opacity duration-700 ease-in-out ${
                activeCard === "siades" ? "opacity-20" : "opacity-0"
              }`}
            />

            <CardHeader
              className={`flex gap-3 bg-gradient-to-r from-blue-900 to-purple-900 transition-all duration-500 ease-out ${
                activeCard === "siades" ? "from-blue-800 to-purple-800" : ""
              }`}
            >
              <div className="relative group">
                <Image
                  alt="Jombang logo"
                  height={70}
                  src={Jombang}
                  width={70}
                />
                <div
                  className={` ${
                    activeCard === "siades" ? "opacity-30" : "opacity-0"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <p
                  className={`text-xl font-semibold transition-colors duration-500 ease-out ${
                    activeCard === "siades" ? "text-blue-100" : "text-blue-300"
                  }`}
                >
                  SIADES
                </p>
                <p className="text-small text-blue-200 opacity-70">
                  heroui.com
                </p>
              </div>
            </CardHeader>

            <Divider
              className={`transition-all duration-500 ease-out ${
                activeCard === "siades"
                  ? "bg-gradient-to-r from-blue-400 to-purple-400 h-0.5"
                  : "bg-gradient-to-r from-blue-500 to-purple-500 h-0.5"
              }`}
            />

            <CardBody className="scrollbar-hide bg-gray-900 bg-opacity-50 relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ease-in-out ${
                  activeCard === "siades"
                    ? "from-blue-500/10 to-purple-500/10 opacity-100"
                    : "from-blue-500/5 to-purple-500/5 opacity-50"
                }`}
              />
              <p
                className={`relative z-10 transition-colors duration-500 ease-out ${
                  activeCard === "siades" ? "text-gray-100" : "text-gray-300"
                }`}
              >
                Sistem Administrasi Desa Jombang adalah salah satu sistem yang
                digunakan untuk mengelola data desa di Kabupaten Jombang. Sistem
                ini memungkinkan pengguna untuk mengakses dan mengelola
                informasi terkait desa, termasuk data penduduk, laporan, dan
                lain-lain.
              </p>
            </CardBody>

            <Divider
              className={`transition-all duration-500 ease-out ${
                activeCard === "siades"
                  ? "bg-gradient-to-r from-purple-400 to-blue-400 h-0.5"
                  : "bg-gradient-to-r from-purple-500 to-blue-500 h-0.5"
              }`}
            />

            <CardFooter className="bg-gray-900 bg-opacity-50">
              <Link
                isExternal
                showAnchorIcon
                className={`transition-all duration-500 ease-out flex items-center ${
                  activeCard === "siades"
                    ? "text-blue-300"
                    : "text-blue-400 hover:text-blue-300"
                }`}
                href="https://wijaya524.github.io/aryansyah.github.io/"
              >
                <span className="mr-2">Visit the website</span>
                <span
                  className={`inline-block transition-transform duration-500 ease-out ${
                    activeCard === "siades" ? "translate-x-1" : ""
                  }`}
                >
                  →
                </span>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* You can add more project cards here using the same structure */}
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>


    </div>
  );
}
