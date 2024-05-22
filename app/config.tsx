// ! Imports for config

import { Inbox } from "lucide-react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

// * Config

// ! Connect links

export const CONNECT_LINKS: Array<{
	name: string;
	href: string;
	icon: React.ReactNode;
}> = [
	{
		name: "Twitter",
		href: "https://twitter.com/_pittman",
		icon: <SiTwitter className="size-6 fill-foreground" />,
	},
	{
		name: "GitHub",
		href: "https://github.com/noahpittman",
		icon: <SiGithub className="size-6 fill-foreground" />,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/noahrileypittman/",
		icon: <SiLinkedin className="size-6 fill-foreground" />,
	},
	{
		name: "Email",
		href: "mailto:noahpittman00@gmail.com",
		icon: <Inbox className="size-6 " />,
	},
];

// ! All projects

export const ALL_PROJECTS: Array<{
	name: string;
	desc: string;
	href: string;
	src: string;
}> = [
	{
		name: "hushh",
		desc: "Minimalist white noise generator for MacOS",
		href: "https://hushh.npitt.dev",
		src: "/projects/hushh.png",
	},
	{
		name: "Bordly",
		desc: "Style guide generator for quick design systems",
		href: "https://bordly.app",
		src: "/projects/bordly.png",
	},
	{
		name: "Where's Bobby?",
		desc: "Quickly find your elevation & coordinates. Made for a friend",
		href: "https://wheresbobby.vercel.app",
		src: "/projects/wheresbobby.png",
	},
	{
		name: "PomoLogs",
		desc: "Pomodoro timer with log tracking",
		href: "https://pomologs.org",
		src: "/projects/pomologs.png",
	},
	{
		name: "DevPillar",
		desc: "Open source design & development resource library",
		href: "https://devpillar.org",
		src: "/projects/devpillar.png",
	},
	{
		name: "QR Gen",
		desc: "QR code generator",
		href: "https://qr.npitt.dev",
		src: "/projects/qr.png",
	},
	{
		name: "Pokédex",
		desc: "Simple pokédex made with Tanstack Query",
		href: "https://pokedex.npitt.dev",
		src: "/projects/pokedex.png",
	},
	{
		name: "Historicolor",
		desc: "Restore b/w photos to color with AI",
		href: "https://historicolor.org",
		src: "/projects/historicolor.png",
	},
	{
		name: "Shade Shuffle",
		desc: "Color palette generator",
		href: "https://shadeshuffle.org",
		src: "/projects/shadeshuffle.png",
	},
];
