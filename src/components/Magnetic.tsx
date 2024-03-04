"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Magnetic({
	children,
	stretch = "md",
	className,
}: {
	children: React.ReactNode;
	stretch?: "xs" | "sm" | "md" | "lg";
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e;
		if (ref.current !== null) {
			const { height, width, left, top } = ref.current.getBoundingClientRect();
			const middleX = clientX - (left + width / 2);
			const middleY = clientY - (top + height / 2);
			setPosition(
				stretch === "lg"
					? { x: middleX, y: middleY }
					: stretch === "md"
					? { x: middleX / 2, y: middleY / 2 }
					: stretch === "sm"
					? { x: middleX / 4, y: middleY / 4 }
					: { x: middleX / 8, y: middleY / 8 }
			);
		}
	};

	const reset = () => {
		setPosition({ x: 0, y: 0 });
	};

	const { x, y } = position;
	return (
		<motion.div
			style={{ position: "relative" }}
			ref={ref}
			onMouseMove={handleMouse}
			onMouseLeave={reset}
			animate={{ x, y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export { Magnetic };
