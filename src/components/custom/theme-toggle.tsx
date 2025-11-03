"use client";

import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useRef } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme, systemTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "system") {
      systemTheme === "light" ? setTheme("dark") : setTheme("light");
    } else theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
          className={cn(
            "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 w-9 transition-all focus:border-2 hover:border-2 border-border"
          )}
          onClick={() => {
            toggleTheme();
          }}
        >
          <span className={cn("size-5 bg-secondary-foreground", className)} />
          <span className="sr-only">Toggle theme</span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="mt-2">Toggle theme</TooltipContent>
    </Tooltip>
  );
}
