/* eslint-disable prettier/prettier */
"use client";

import { Card, CardFooter, CardHeader, Divider, CardBody, Link } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";



// Lazy load AOS untuk meningkatkan performa
export default function Projects() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("aos").then((AosModule) => {
      AosModule.default.init({ duration: 1000, once: true });
    });

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);

      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleMouseEnter = useCallback(() => setActiveCard("siades"), []);
  const handleMouseLeave = useCallback(() => setActiveCard(null), []);

  const cardClass = useMemo(
    () =>
      `max-w-[400px] relative backdrop-blur-md bg-opacity-20   shadow-lg transition-all duration-300 ease-out transform-gpu 
      ${activeCard === "siades" ? "scale-105 shadow-xl " : "hover:shadow-blue-500/10"}`,
    [activeCard]
  );

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-10 py-16 px-4"
      id="projects"
    >
      <header className="text-center">
        <h1 className="text-2xl md:text-5xl font-semibold">
          <span className="text-[#11181C] dark:text-[#ECEDEE]">My</span>
          <span className="text-[#328CF2]"> Projects</span>
        </h1>
      </header>

      <section
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl"
        data-aos="fade-up-right"
      >
        <article>
          <Card
            className={cardClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CardHeader className="flex gap-3 bg-[#FEFEFE] dark:bg-[#111113] p-4">
              <figure className="bg-slate-300 rounded-full border dark:bg-zinc-950 bg-opacity-50 flex items-center justify-center w-20 h-20">
                <Image
                  alt="Logo Jombang"
                  height={70}
                  loading="lazy"
                  src={Jombang}
                  width={70}
                />
              </figure>
              <div>
                <h2 className="text-xl text-[#20262A] font-semibold dark:text-[#ECEDEE]">
                  SIADES
                </h2>
                <p className="text-sm dark:text-blue-200 opacity-70">
                  siades.com
                </p>
              </div>
            </CardHeader>

            <Divider className="bg-[#FEFEFE] dark:bg-[#111113] h-0.5" />
            <CardBody className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4">
              <p className="text-[#20262A] dark:text-[#ECEDEE]">
                Sistem Administrasi Desa Jombang digunakan untuk mengelola data
                desa, termasuk data penduduk, laporan, dan informasi lainnya.
              </p>
            </CardBody>


            <CardFooter className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4 flex justify-between items-center">
              <Link
                isExternal
                showAnchorIcon
                className="text-blue-600 hover:text-blue-500 transition-all"
                href="https://wijaya524.github.io/aryansyah.github.io/"
              >
                Visit the website →
              </Link>
            </CardFooter>
          </Card>
        </article>

        <article className="">
          <Card
            className={cardClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CardHeader className="flex gap-3 bg-[#FEFEFE] dark:bg-[#111113] p-4 ">
              <figure className="bg-slate-300 rounded-full border dark:bg-zinc-950 bg-opacity-50 flex items-center justify-center w-20 h-20">
                <Image
                  alt="Logo Jombang"
                  height={70}
                  loading="lazy"
                  src={Asah}
                  width={70}
                />
              </figure>
              <div>
                <h2 className="text-xl text-[#20262A] font-semibold dark:text-[#ECEDEE]">
                  Asah React Cohort
                </h2>
                <p className="text-sm dark:text-blue-200 opacity-70">
                  myreactcohort.com
                </p>
              </div>
            </CardHeader>

            <Divider className="bg-[#FEFEFE] dark:bg-[#111113] h-0.5" />
            <CardBody className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4">
              <p className="text-[#20262A] dark:text-[#ECEDEE]">
                Hasil dari menyelesaikan React-Backend with AI Cohort in ASAH LED By Dicoding and Accenture. 
              </p>
            </CardBody>


            <CardFooter className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4 flex justify-between items-center">
              <Link
                isExternal
                showAnchorIcon
                className="text-blue-600 hover:text-blue-500 transition-all"
                href="https://wijaya524.github.io/aryansyah.github.io/"
              >
                Visit the website →
              </Link>
            </CardFooter>
          </Card>
        </article>
      </section>
    </main>
  );
}
