"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Magnetic } from "./Magnetic";
import { FaHashtag } from "react-icons/fa";
import { stack } from "@/config";

const Stack = () => {
	return (
		<section id="stack">
			<h2 className="text-lg font-semibold flex items-center">
				Stack
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#stack"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex gap-4 flex-wrap py-3">
				{stack.map((tech, i) => (
					<Magnetic stretch="sm" key={i}>
						<motion.div
							whileHover={{
								scale: 1.05,
								rotate: Math.random() * 2.5,
								transition: { duration: 0.1 },
							}}
							className="flex items-center w-fit border rounded-md p-1 px-2 leading-none cursor-default hover:shadow-md dark:shadow-border/25 transition-shadow duration-100"
						>
							<tech.icon className="h-5 w-5 mr-2" />
							{tech.name}
						</motion.div>
					</Magnetic>
				))}
			</div>
			<p>
				{`My specialty is building beautiful, responsive web applications with
				Next.js. I'm also experienced with Node.js, Express, and various
				databases listed above.`}
			</p>
		</section>
	);
};

export default Stack;
