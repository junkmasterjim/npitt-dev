"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.5, bounce: 0, type: "spring" }}
				className="sm:py-32 py-24"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
