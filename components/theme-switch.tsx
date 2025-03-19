"use client";

import { FC, useEffect, useState } from "react";
import { Switch, SwitchProps } from "@heroui/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className, classNames }) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <Switch
      isSelected={isDarkMode}
      onChange={() => setTheme(isDarkMode ? "light" : "dark")}
      className={clsx(
        "px-px transition-opacity hover:opacity-80 cursor-pointer",
        className,
        classNames?.base
      )}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <div
        className={clsx(
          "w-auto h-auto bg-transparent rounded-lg flex items-center justify-center",
          "!text-default-500 pt-px px-0 mx-0",
          classNames?.wrapper
        )}
      >
        {isDarkMode ? <MoonFilledIcon size={22} /> : <SunFilledIcon size={22} />}
      </div>
    </Switch>
  );
};
