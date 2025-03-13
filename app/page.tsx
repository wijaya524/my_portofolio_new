"use client";

import ScrollButton from "@/components/arrow";
import Projects from "./Projects/page";

import HeroPage from "@/app/Hero/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Projects />
      <ScrollButton />
    </>
  );
}
