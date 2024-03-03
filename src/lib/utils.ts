import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const blogPosts: { title: string; date: string; href: string }[] = [
	{
		title: "Custom Loaders With React, TypeScript, and Framer Motion",
		date: "mar. '24",
		href: "animated-loaders",
	},
];
