"use client";

// The 'cn' function is a utility function that allows you to conditionally join class names together.
import { cn } from "@/lib/utils";

import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightCard({
	byline = "Info",
	bylineStyles,
	header = "Header",
	headerStyles,
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum eum ullam nostrum atque quam.",
	descriptionStyles,
	colorRGB = { r: 120, g: 120, b: 120 },
	opacity = 0.2,
	className,
	weight = "normal",
	children,
	spring = false,
	size = 250,
	rounded = "xl",
}: {
	byline?: string;
	bylineStyles?: string;
	header?: string;
	headerStyles?: string;
	description?: string;
	descriptionStyles?: string;
	colorRGB?: { r: number; g: number; b: number };
	opacity?: 0.1 | 0.15 | 0.2 | 0.25 | 0.3 | 0.35 | 0.4;
	className?: string;
	weight?: "normal" | "bold";
	children?: React.ReactNode;
	spring?: boolean;
	size?: number;
	rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
}) {
	let mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};
	const smooth = {
		x: useSpring(mouse.x, { stiffness: 100, damping: 50, mass: 0.3 }),
		y: useSpring(mouse.y, { stiffness: 100, damping: 50, mass: 0.3 }),
	};

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		let { left, top } = currentTarget.getBoundingClientRect();

		mouse.x.set(clientX - left);
		mouse.y.set(clientY - top);

		smooth.x.set(clientX - left);
		smooth.y.set(clientY - top);
	}

	return (
		<div
			className={cn(
				`group relative max-w-md border px-8 py-12 shadow-lg transition
				border-neutral-200 dark:border-neutral-900 
				hover:border-neutral-300 dark:hover:border-neutral-800
				dark:shadow-neutral-900/50 
				bg-neutral-100 dark:bg-neutral-950 
				text-neutral-900 dark:text-neutral-100`,
				className,

				rounded === "none" && "rounded-none",
				rounded === "sm" && "rounded-sm",
				rounded === "md" && "rounded-md",
				rounded === "lg" && "rounded-lg",
				rounded === "xl" && "rounded-xl",
				rounded === "2xl" && "rounded-2xl",
				rounded === "3xl" && "rounded-3xl",
				rounded === "full" && "rounded-full"
			)}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				className={cn(
					"pointer-events-none absolute -inset-px opacity-0 transition group-hover:opacity-100",

					rounded === "none" && "rounded-none",
					rounded === "sm" && "rounded-sm",
					rounded === "md" && "rounded-md",
					rounded === "lg" && "rounded-lg",
					rounded === "xl" && "rounded-xl",
					rounded === "2xl" && "rounded-2xl",
					rounded === "3xl" && "rounded-3xl",
					rounded === "full" && "rounded-full"
				)}
				style={{
					background: useMotionTemplate`
            radial-gradient(
              ${size}px circle at ${spring ? smooth.x : mouse.x}px ${
						spring ? smooth.y : mouse.y
					}px,
              rgba(${colorRGB?.r}, ${colorRGB.g}, ${colorRGB.b}, ${opacity}),
              transparent 80%
            )
          `,
				}}
			/>
			<div className="pb-4">
				<h3
					className={cn(
						"text-base font-semibold leading-7 text-neutral-500",
						bylineStyles,
						weight === "bold" ? "font-semibold" : "font-medium"
					)}
				>
					{byline}
				</h3>
				<div className="mt-2 flex items-center gap-x-2">
					<span
						className={cn(
							"text-5xl font-bold tracking-tight",
							headerStyles,
							weight === "bold" ? "font-bold" : "font-semibold"
						)}
					>
						{header}
					</span>
				</div>
				<p
					className={cn(
						"mt-2 text-base leading-7 text-neutral-400 ",
						descriptionStyles
					)}
				>
					{description}
				</p>
			</div>
			{children}
		</div>
	);
}
