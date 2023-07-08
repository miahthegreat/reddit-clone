"use client";

import { useTheme } from "next-themes";
import { Button, buttonVariants } from "@/components/ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState("");

  useEffect(() => {
    if (theme) setThemeState(theme);
  });

  return (
    <>
      {theme && (
        <Button
          className="relative flex h-8 w-8 items-center rounded-full bg-transparent text-zinc-900 ring-2 ring-zinc-400 ring-offset-1 focus-within:ring-2 focus-within:ring-zinc-500 hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-1 focus:ring-2 focus:ring-zinc-500 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-800"
          onClick={() => {
            if (theme && themeState === "light") setTheme("dark");
            if (theme && themeState === "dark") setTheme("light");
          }}
        >
          <FaSun
            className={cn(
              "absolute h-5 w-5 transform rounded-full transition duration-300 ease-in",
              themeState === "light"
                ? "-rotate-0 scale-100"
                : "-rotate-180 scale-0"
            )}
          />
          <FaMoon
            className={cn(
              "absolute h-5 w-5 transform rounded-full transition duration-300 ease-in",
              themeState === "dark"
                ? "-rotate-0 scale-100"
                : "-rotate-180 scale-0"
            )}
          />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
