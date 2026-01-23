"use client";

import Projects from "./Projects/page";
import SkillsPage from "./Skills/page";
import ContactPage from "./Contact/page";
import Footer from "./Footer/page";

import HeroPage from "@/app/Hero/page";


export default function Home() {
  return (
    <>
      <HeroPage />
      <Projects />
      <SkillsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
