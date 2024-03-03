"use client";

import { motion } from "framer-motion";

function LoaderText({
	text = "Loading  . . .",
	variant = "reverse",
	fontSize = 720,
}: {
	text?: string;
	variant?: "reverse" | "constant";
	fontSize?: number;
}) {
	return (
		<motion.svg
			viewBox={`0 0 ${fontSize * 8} ${fontSize * 2}`}
			xmlns="http://www.w3.org/2000/svg"
		>
			<motion.text
				fontSize={fontSize}
				textAnchor="middle"
				dominantBaseline={"middle"}
				fontFamily="sans-serif"
				fontWeight={"bold"}
				x={fontSize * 4}
				y={fontSize}
				fill="none"
				stroke="#000"
				strokeWidth={15}
				initial={
					variant === "reverse"
						? {
								strokeDasharray: fontSize / 12,
								strokeDashoffset: fontSize,
						  }
						: {
								strokeDasharray: 50,
								strokeDashoffset: 2500,
						  }
				}
				animate={
					variant === "reverse"
						? { strokeDashoffset: 0, strokeDasharray: fontSize * 3.5 }
						: { strokeDashoffset: 0 }
				}
				transition={{
					duration: variant === "reverse" ? 3 : 10,
					repeat: Infinity,
					ease: variant === "reverse" ? "easeInOut" : "linear",
					repeatType: "reverse",
				}}
			>
				{text}
			</motion.text>
		</motion.svg>
	);
}

export { LoaderText };
