"use client";

import { useTheme } from "@wits/next-themes";
import { Button } from "@/components/ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [themeState, setThemeState] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (theme) setThemeState(theme);
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      className="relative flex h-8 w-8 items-center rounded-full bg-transparent text-zinc-900 ring-2 ring-zinc-400 ring-offset-1 focus-within:ring-2 focus-within:ring-zinc-500 hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-1 focus:ring-2 focus:ring-zinc-500 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-800"
      onClick={() => {
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("light");
      }}
    >
      <FaSun
        className={cn(
          "absolute h-5 w-5 transform rounded-full transition duration-300 ease-in",
          theme === "light" ? "-rotate-0 scale-100" : "-rotate-180 scale-0"
        )}
      />
      <FaMoon
        className={cn(
          "absolute h-5 w-5 transform rounded-full transition duration-300 ease-in",
          theme === "dark" ? "-rotate-0 scale-100" : "-rotate-180 scale-0"
        )}
      />
    </Button>
  );
};

export default ThemeToggle;
