"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Text3D({
	text,
	secondaryText,
	clickToggle,
	primaryClassName,
	secondaryClassName,
	containerClassName,
	bgColors,
	textColors,
}: {
	text: string | React.ReactNode;
	secondaryText?: string | React.ReactNode;
	clickToggle?: boolean;
	primaryClassName?: string;
	secondaryClassName?: string;
	containerClassName?: string;
	bgColors?: [string, string];
	textColors?: [string, string];
}) {
	const [hovered, setHovered] = useState(false);

	return (
		// Text container
		<motion.div
			id="text3d-container"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			onClickCapture={() => clickToggle && setHovered(!hovered)}
			className={cn(
				"rounded-full border-neutral-300/25 border select-none",
				containerClassName
				// bgColors?.[0]
				// 	? hovered
				// 		? bgColors[1]
				// 		: bgColors[0]
				// 	: hovered
				// 	? "bg-white"
				// 	: "bg-black"
			)}
			style={{
				transitionProperty: "background-color",
				transitionDuration: "0.3s",
			}}
		>
			<motion.div
				style={{
					transformStyle: "preserve-3d",
					rotateX: hovered ? 90 : 0,
					translateY: hovered ? "-50%" : "0%",
					transitionProperty: "transform",
					transitionDuration: "0.3s",
				}}
				whileTap={{ cursor: "grabbing" }}
				className={cn("relative cursor-grab")}
			>
				{/* Front, Primary */}
				<motion.div
					style={{
						transitionProperty: "all",
						transitionDuration: "0.3s",
						opacity: hovered ? 0 : 1,
						rotateY: hovered ? "-100%" : "0%",
					}}
					className={cn(
						textColors?.[0] ? textColors[0] : "text-white",
						primaryClassName
					)}
				>
					{text}
				</motion.div>

				{/* Back, Secondary */}
				<motion.div
					style={{
						rotateX: -90,
						transitionProperty: "all",
						transitionDuration: "0.3s",
						transformOrigin: "top center",
						opacity: hovered ? 1 : 0,
						translateY: "0",
					}}
					className={cn(
						"absolute",
						secondaryClassName,
						textColors?.[0] ? textColors[1] : "text-black"
					)}
				>
					{secondaryText ? secondaryText : text}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
