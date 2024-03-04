"use client";

import { motion } from "framer-motion";

function WordleLoader({
	stagger = 0.1,
	duration = 0.3,
	repeatDelay = 1.25,
	text = "Loading",
}: {
	stagger?: 0.05 | 0.1 | 0.2;
	duration?: number | null;
	repeatDelay?: number;
	text?: string;
}) {
	return (
		<div className="flex gap-4">
			{text.split("").map((item, i) => (
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
					}}
					transition={{
						repeat: Infinity,
						repeatDelay: repeatDelay,
						easings: [
							[0.8, 0, 1, 1],
							[0, 0, 0.2, 1],
							[0.8, 0, 1, 1],
						],
						duration: duration,
						delay: i * stagger,
					}}
					key={item}
				>
					<motion.div
						key={item}
						className="size-8 md:size-16 uppercase bg-black text-center grid place-content-center font-bold text 2xl md:text-3xl text-white"
					>
						{item}
					</motion.div>
				</motion.div>
			))}
		</div>
	);
}

export { WordleLoader };
