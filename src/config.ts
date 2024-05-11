// *
// *
// *
// * About/Present Section
// *
// *
// *

export const about: string = `I'm Noah, a freelance full stack developer with a burning desire to
progress. When I'm not building stunning web applications, I can be
found reading, watching HBO, or on a nature walk with my wife.`;

export const present: string = `Currently I work as a manager at a corporate paint store. In my free
time I freelance & work on my own projects! I'm always looking for new
things to work on, so if you have a project in mind, feel free to `;

// *
// *
// *
// * Stack Section
// *
// *
// *

import { IconType } from "react-icons";
import { FiShoppingBag, FiSmartphone } from "react-icons/fi";
import {
	SiAuth0,
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

type Stack = {
	name:
		| "JavaScript"
		| "TypeScript"
		| "React"
		| "Next.js"
		| "Authentication"
		| "Node.js"
		| "Express"
		| "CSS"
		| "Tailwind CSS"
		| "PostgreSQL"
		| "MySQL"
		| "Prisma"
		| "UI/UX Design"
		| "E-Commerce";
	icon: IconType;
};

export const stack: Array<Stack> = [
	{ name: "JavaScript", icon: SiJavascript },
	{ name: "TypeScript", icon: SiTypescript },
	{ name: "React", icon: SiReact },
	{ name: "Next.js", icon: SiNextdotjs },
	{ name: "Authentication", icon: SiAuth0 },
	{ name: "Node.js", icon: SiNodedotjs },
	{ name: "Express", icon: SiExpress },
	{ name: "CSS", icon: SiCss3 },
	{ name: "Tailwind CSS", icon: SiTailwindcss },
	{ name: "PostgreSQL", icon: SiPostgresql },
	{ name: "MySQL", icon: SiMysql },
	{ name: "Prisma", icon: SiPrisma },
	{ name: "UI/UX Design", icon: FiSmartphone },
	{ name: "E-Commerce", icon: FiShoppingBag },
];

// *
// *
// *
// * Projects Section
// *
// *
// *

type Project = {
	href: string;
	title: string;
	description: string;
	stack: Array<Stack["name"] | "Auth" | "Tauri">;
	repo?: string;
	download?: string;
};

export const projects: Array<Project> = [
	{
		href: "https://icibioscience.com",
		title: "ICI Bioscience",
		description:
			"A company website for a biotech / R&D company in the United States.",
		stack: ["Next.js", "Tailwind CSS", "TypeScript", "E-Commerce"],
	},
	{
		href: "https://pomologs.org",
		title: "PomoLogs - Pomodoro Timer & Work Logs",
		description:
			"Combines a traditional pomodoro timer with work logs. Downloadable as a PWA with Tauri.",
		stack: ["Next.js", "Tailwind CSS", "Tauri"],
		repo: "https://github.com/noahpittman/pomologs-tauri",
		download:
			"https://www.dropbox.com/scl/fi/0d003v63e6t6una1sysxj/PomoLogs.zip?rlkey=sgb6h0kdpgdiu47zdo21vui4f&dl=1",
	},
	{
		href: "https://devpillar.org",
		title: "DevPillar - Resource Library",
		description: "Hand-picked resource library for developers & designers.",
		stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Auth"],
		repo: "https://github.com/noahpittman/devpillar",
	},

	{
		href: "https://donebyhd.com",
		title: "DoneByHD - Portfolio",
		description: "Portfolio website for a freelance designer.",
		stack: ["Next.js", "Tailwind CSS", "Prisma", "MySQL", "Auth"],
		repo: "https://github.com/noahpittman/hd-entertainment",
	},
];

// *
// *
// *
// * Tools Section
// *
// *
// *

type Tool = {
	title: string;
	description: string;
	href: string;
};

export const tools: Array<Tool> = [
	{
		title: "bordly (open source)",
		description: "build & export a style guide in seconds",
		href: "https://bordly.app",
	},
	{
		title: "ballpit",
		description: "ballpit effect using matter.js",
		href: "https://ballpit.npitt.dev",
	},

	{
		title: "qrgen",
		description: "qr code generator with url",
		href: "https://qr.npitt.dev",
	},
	{
		title: "pokedex",
		description: "pokedex using pokeapi & tanstack query",
		href: "https://pokedex.npitt.dev",
	},
	{
		title: "historicolor",
		description: "recolor old black & white photos",
		href: "https://historicolor.org",
	},

	{
		title: "shadeshuffle",
		description: "easily generate color palettes",
		href: "https://shadeshuffle.org",
	},
];

// *
// *
// *
// * Connect Section
// *
// *
// *

type Connect = { title: string; description: string; href: string };

export const connect: Array<Connect> = [
	{
		title: "Github",
		description: "@noahpittman",
		href: "https://github.com/noahpittman",
	},
	{
		title: "Twitter",
		description: "@_pittman",
		href: "https://twitter.com/_pittman",
	},
	{
		title: "LinkedIn",
		description: "@noahrileypittman",
		href: "https://www.linkedin.com/in/noahrileypittman",
	},
	{
		title: "Email",
		description: "noahpittman[zero][zero]@gmail.com",
		href: "mailto:noahpittman00@gmail.com",
	},
];
