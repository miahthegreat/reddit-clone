"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      className="relative flex h-6 w-6 sm:h-8 sm:w-8 items-center bg-transparent text-zinc-900 ring-2 ring-zinc-400 ring-offset-1 focus-within:ring-2 focus-within:ring-zinc-500 hover:bg-zinc-200 hover:ring-2 hover:ring-zinc-500 hover:ring-offset-1 focus:ring-2 focus:ring-zinc-500 dark:bg-transparent dark:text-zinc-50 dark:hover:bg-zinc-800"
      size="rounded"
      onClick={() => {
        if (resolvedTheme === "light") setTheme("dark");
        if (resolvedTheme === "dark") setTheme("light");
      }}
    >
      <FaSun
        className={cn(
          "absolute h-5 w-5 sm:h-6 sm:w-6 transform rounded-full transition duration-300 ease-in",
          resolvedTheme === "light"
            ? "-rotate-0 scale-100"
            : "-rotate-180 scale-0"
        )}
      />
      <FaMoon
        className={cn(
          "absolute h-5 w-5 sm:h-6 sm:w-6 transform rounded-full transition duration-300 ease-in",
          resolvedTheme === "dark"
            ? "-rotate-0 scale-100"
            : "-rotate-180 scale-0"
        )}
      />
    </Button>
  );
};

export default ThemeToggle;
