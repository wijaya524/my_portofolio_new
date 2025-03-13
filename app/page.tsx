"use client";

import ScrollButton from "@/components/arrow";
import Projects from "./Projects/page";

import HeroPage from "@/app/Hero/page";
import SkillsPage from "./Skills/page";
import SCMediaPage from "./SCMedia/page";

export default function Home() {
  return (
    <>
      <HeroPage />
      <Projects />
 
      <SkillsPage />
      <SCMediaPage />
    </>
  );
}
