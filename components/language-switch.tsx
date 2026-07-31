"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import clsx from "clsx";

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setLanguage(language === "id" ? "en" : "id")}
      className={clsx(
        "flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300",
        "border-gray-200 dark:border-gray-800 bg-white/5 backdrop-blur-md hover:bg-black/5 dark:hover:bg-white/5",
        "shadow-sm hover:shadow-md cursor-pointer group"
      )}
      aria-label="Toggle language"
    >
      <Globe size={16} className="text-gray-500 dark:text-gray-400 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 select-none">
        {language.toUpperCase()}
      </span>
    </button>
  );
};
