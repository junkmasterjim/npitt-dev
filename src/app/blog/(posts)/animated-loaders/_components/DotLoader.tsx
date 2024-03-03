"use client";

import { motion } from "framer-motion";

function DotLoader({
	stagger = 0.1,
	duration = 0.3,
	repeatDelay = 1.25,
}: {
	stagger?: 0.05 | 0.1 | 0.2;
	duration?: number | null;
	repeatDelay?: number;
}) {
	return (
		<div className="flex w-fit gap-2 justify-center">
			{Array.from({ length: 5 }, (_, i) => i).map((item, i) => (
				<motion.div
					animate={{
						translateY: ["0%", "-25%", "0%"],
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
					<motion.div key={item} className="size-4 rounded-full bg-black" />
				</motion.div>
			))}
		</div>
	);
}

export { DotLoader };
