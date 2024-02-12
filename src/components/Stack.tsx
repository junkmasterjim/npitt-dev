"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiSmartphone } from "react-icons/fi";
import {
	SiCss3,
	SiExpress,
	SiJavascript,
	SiMysql,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";

const stack: { name: string; icon: IconType }[] = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "Express", icon: SiExpress },
	{ name: "CSS", icon: SiCss3 },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MySQL", icon: SiMysql },
	{ name: "Prisma", icon: SiPrisma },
	{ name: "UI/UX Design", icon: FiSmartphone },
];

const Stack = () => {
	return (
		<section id="stack">
			<h2 className="text-lg font-bold">Stack</h2>
			<div className="flex gap-4 flex-wrap py-3">
				{stack.map((tech) => (
					<motion.div
						whileHover={{
							scale: 1.05,
							rotate: Math.random() * 10 - 5,
							transition: { duration: 0.1 },
						}}
						className="flex items-center w-fit border rounded-md p-1 px-2 leading-none cursor-default hover:shadow-md dark:shadow-border/25 transition-shadow duration-100"
					>
						<tech.icon className="h-5 w-5 mr-2" />
						{tech.name}
					</motion.div>
				))}
			</div>
			<p>
				My specialty is building beautiful, responsive web applications with
				Next.js. I'm also experienced with Node.js, Express, and various
				databases listed above.
			</p>
		</section>
	);
};

export default Stack;
