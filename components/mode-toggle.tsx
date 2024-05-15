"use client";

import { useTheme } from "next-themes";
import { SquareIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ModeToggle({ className }: { className?: string }) {
	const { setTheme, theme, systemTheme } = useTheme();

	const toggleTheme = () => {
		if (theme === "system") {
			systemTheme === "light" ? setTheme("dark") : setTheme("light");
		} else theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<motion.button
					whileTap={{ scale: 0.9 }}
					transition={{ duration: 0.1 }}
					className={cn(
						"focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 w-9 hover:invert transition-all rounded-full focus:border-2 hover:border-2 border-border/25"
					)}
					onClick={() => {
						toggleTheme();
					}}
				>
					<span className={cn("size-5 bg-secondary-foreground", className)} />
					<span className="sr-only">Toggle theme</span>
				</motion.button>
			</TooltipTrigger>
			<TooltipContent className="mt-2">Toggle theme</TooltipContent>
		</Tooltip>
	);
}
