"use client";

import {
	SpringOptions,
	motion,
	useMotionValue,
	useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const Cursor = ({ className }: { className?: string }) => {
	// equal to height and width of the cursor
	const cursorSize: number = 20;
	// use Mouse if you want to use the cursor position with no spring
	const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
	const smoothOptions: SpringOptions = {
		stiffness: 300,
		damping: 20,
		mass: 0.5,
	};

	// use smooth if you want to use the cursor position with a spring
	const smooth = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const handleMouseMove = (e: { clientX: any; clientY: any }) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - cursorSize / 2);
		mouse.y.set(clientY - cursorSize / 2);
	};

	useEffect(() => {
		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: [0, 0, 1] }}
			transition={{ duration: 1, times: [0, 0.9, 1] }}
			style={{
				// smooth for spring, mouse for static
				left: mouse.x,
				top: mouse.y,
			}}
			className={cn(
				// height and width of the cursor is set to 16px
				"rounded-full h-5 w-5 z-50 cursor-none pointer-events-none backdrop-blur- fixed inset-0 backdrop-invert hidden md:block",
				className
			)}
		/>
	);
};
