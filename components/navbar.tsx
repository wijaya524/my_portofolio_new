"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react"; // Ikon futuristik
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import Link from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitch } from "@/components/language-switch";
import { TranslationKey } from "@/config/translations";

const ListItem = [
  { key: "nav.home" as TranslationKey, link: "/" },
  { key: "nav.projects" as TranslationKey, link: "#projects" },
  { key: "nav.skills" as TranslationKey, link: "#skills" },
  { key: "nav.contact" as TranslationKey, link: "#contact" },
];

export const Navbar = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("nav.home");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Navbar Utama */}
      <HeroUINavbar
        className={`transition-all duration-300  ${
          theme === "light" ? "bg-white shadow-lg" : ""
        } p-4 rounded-xl`}
        maxWidth="xl"
        position="sticky"
      >
        <NavbarContent
          className="hidden md:flex w-full md:space-x-5 xl:space-x-24"
          justify="center"
        >
          <NavbarItem className="flex gap-16 items-center">
            {ListItem.map((item) => (
              <Link
                key={item.key}
                passHref
                href={item.link}
                onClick={(e) => {
                  if (item.link.startsWith("#")) {
                    e.preventDefault();
                    const section = document.querySelector(item.link);

                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setActive(item.key);
                }}
              >
                <motion.div
                  className="relative flex items-center justify-center min-w-[140px] py-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActive(item.key)}
                >
                  {active === item.key && (
                    <motion.div
                      className={
                        theme === "dark"
                          ? "absolute inset-0 rounded-lg blur-md opacity-100"
                          : "absolute inset-0"
                      }
                      layoutId="activeBackground"
                      style={{
                        backgroundColor:
                          theme === "light" ? undefined : "#3b82f6",
                        borderBottom:
                          theme === "light" ? "4px solid black" : undefined,
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <p
                    className={`relative transition-all ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    } ${active === item.key ? "font-bold" : ""}`}
                  >
                    {t(item.key)}
                  </p>
                </motion.div>
              </Link>
            ))}
            <div className="flex gap-4 items-center">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* Tombol Menu untuk Mobile */}
        <button
          className="md:hidden block dark:text-white"
          onClick={() => setIsDrawerOpen(true)}
        >
          <Menu size={28} />
        </button>
      </HeroUINavbar>

      {/* Drawer Futuristik */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex justify-end"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              animate={{ x: 0 }}
              className={`w-3/4 h-full ${
                theme === "light" ? "bg-white" : "bg-slate-900"
              } shadow-xl p-6 relative`}
              exit={{ x: "100%" }}
              initial={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              {/* Tombol Close */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                onClick={() => setIsDrawerOpen(false)}
              >
                <X size={28} />
              </button>

              {/* Menu Items */}
              <div className="mt-12 flex flex-col space-y-6">
                {ListItem.map((item) => (
                  <motion.div
                    key={item.key}
                    className="relative cursor-pointer p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      if (item.link.startsWith("#")) {
                        e.preventDefault();
                        const section = document.querySelector(item.link);

                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                      setActive(item.key);
                      setIsDrawerOpen(false);
                    }}
                  >
                    {active === item.key && (
                      <motion.div
                        className="absolute inset-0 bg-cyan-500 rounded-lg blur-md opacity-50"
                        layoutId="activeBackground"
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    )}
                    <p
                      className={`relative text-lg font-medium ${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {t(item.key)}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Theme & Language Switch di Drawer */}
              <div className="mt-8 flex items-center gap-4">
                <ThemeSwitch />
                <LanguageSwitch />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
