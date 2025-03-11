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

const ListItem = [
  { name: "Home", link: "/" },
  { name: "My Project", link: "/" },
  { name: "My Skills", link: "/" },
  { name: "My Social Media", link: "/" },
  { name: "Contact Me", link: "/" },
];

export const Navbar = () => {
  const [active, setActive] = useState("Home");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
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
          <NavbarItem className="flex gap-16 relative">
            {ListItem.map((item) => (
              <Link key={item.name} passHref href={item.link}>
                <motion.div
                  className="relative flex items-center justify-center px-4 py-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActive(item.name)}
                >
                  {active === item.name && (
                    <motion.div
                      className="absolute inset-0 rounded-lg blur-md opacity-100"
                      layoutId="activeBackground"
                      style={{
                        backgroundColor:
                          theme === "light" ? undefined : "#3b82f6",
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}
                  <p
                    className={`relative transition-all ${
                      theme === "light" ? "text-gray-900" : "text-white"
                    } ${active === item.name ? "font-bold" : ""}`}
                  >
                    {item.name}
                  </p>
                </motion.div>
              </Link>
            ))}
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/* Tombol Menu untuk Mobile */}
        <button
          className="md:hidden block text-white"
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
                    key={item.name}
                    className="relative cursor-pointer p-3 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setActive(item.name);
                      setIsDrawerOpen(false);
                    }}
                  >
                    {active === item.name && (
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
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Theme Switch di Drawer */}
              <div className="mt-8">
                <ThemeSwitch />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
