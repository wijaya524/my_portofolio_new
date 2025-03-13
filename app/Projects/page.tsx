/* eslint-disable prettier/prettier */
"use client";
import { Card, CardFooter, CardHeader, Divider, CardBody, Link } from "@heroui/react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

import Jombang from "../../components/images/Jombang.png";

export default function Projects() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 py-16 px-4" id="projects">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" data-aos="fade-down">
        My Projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl" data-aos="fade-up-right">
        <Card
          className={`max-w-[400px] relative backdrop-blur-md bg-opacity-20 bg-gray-800 border border-gray-700 shadow-lg transition-all duration-500 ease-out transform-gpu ${
            activeCard === "siades" ? "scale-105 shadow-xl shadow-blue-500/30 border-blue-400/50" : "hover:shadow-blue-500/10"
          }`}
          onMouseEnter={() => setActiveCard("siades")}
          onMouseLeave={() => setActiveCard(null)}
        >
          <CardHeader className="flex gap-3 bg-gradient-to-r from-blue-900 to-purple-900 p-4">
            <Image alt="Jombang logo" height={70} src={Jombang} width={70} className="rounded-lg" />
            <div>
              <p className="text-xl font-semibold text-blue-300">SIADES</p>
              <p className="text-sm text-blue-200 opacity-70">heroui.com</p>
            </div>
          </CardHeader>

          <Divider className="bg-gradient-to-r from-blue-400 to-purple-400 h-0.5" />
          <CardBody className="bg-gray-900 bg-opacity-50 p-4">
            <p className="text-gray-300">
              Sistem Administrasi Desa Jombang adalah sistem yang digunakan untuk mengelola data desa di Kabupaten Jombang,
              termasuk data penduduk, laporan, dan informasi lainnya.
            </p>
          </CardBody>
          <Divider className="bg-gradient-to-r from-purple-400 to-blue-400 h-0.5" />

          <CardFooter className="bg-gray-900 bg-opacity-50 p-4 flex justify-between items-center">
            <Link
              isExternal
              showAnchorIcon
              className="text-blue-400 hover:text-blue-300 transition-all"
              href="https://wijaya524.github.io/aryansyah.github.io/"
            >
              Visit the website →
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}