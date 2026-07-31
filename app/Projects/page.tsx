/* eslint-disable prettier/prettier */
"use client";

import { Card, CardFooter, CardHeader, Divider, CardBody, Link } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";

import project from ".";

export default function Projects() {
  const [activeCard] = useState<string | null>(null);
  const { t, language } = useLanguage();

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


  const cardClass = useMemo(
    () =>
      `max-w-[400px] relative backdrop-blur-md bg-opacity-20 shadow-lg transition-all duration-300 ease-out transform-gpu 
       ${activeCard === "siades" ? "scale-105 shadow-xl" : "hover:shadow-blue-500/10"}`,
    [activeCard]
  );

  const projectPortfolio = project();

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-10 py-16 px-4"
      id="projects"
    >
 
      <header className="text-center">
        <h1 className="text-2xl md:text-5xl font-semibold">
          <span className="text-[#11181C] dark:text-[#ECEDEE]">{t("projects.titlePrefix")}</span>{" "}
          <span className="text-[#328CF2]">{t("projects.titleSuffix")}</span>
        </h1>
      </header>

  
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projectPortfolio.map((data: any) => (
          <article key={data.id}>
            <Card
              className={`${cardClass} h-80`}
   
            > 
              <CardHeader className="flex gap-3 bg-[#FEFEFE] dark:bg-[#111113] p-4">
                <figure className="w-20 h-20 flex items-center justify-center bg-slate-300 dark:bg-zinc-950 bg-opacity-50 rounded-full border">
                  <Image
                    alt={data.name}
                    height={70}
                    loading="lazy"
                    src={data.image}
                    width={70}
                  />
                </figure>
                <div>
                  <h2 className="text-xl font-semibold text-[#20262A] dark:text-[#ECEDEE]">
                    {data.name}
                  </h2>
                  <p className="text-sm opacity-70 dark:text-blue-200">
                    {data.domain}
                  </p>
                </div>
              </CardHeader>
              <Divider className="bg-[#FEFEFE] dark:bg-[#111113] h-0.5" />
              <CardBody className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4 h-32 ">
                <p className="text-[#20262A] dark:text-[#ECEDEE] line-clamp-3">{data.describe[language]}</p>
              </CardBody>     
              <CardFooter className="bg-[#FEFEFE] dark:bg-[#111113] bg-opacity-50 p-4 flex justify-between items-center">
                <Link
                  isExternal
                  showAnchorIcon
                  className="text-blue-600 hover:text-blue-500 transition-all"
                  href={data.url}
                >
                  {t("projects.visit")}
                </Link>
              </CardFooter>
            </Card>
          </article>
        ))}
      </section>
    </main>
  );
}
