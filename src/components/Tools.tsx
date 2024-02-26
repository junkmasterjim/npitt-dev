import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const tools: { title: string; description: string; href: string }[] = [
	{
		title: "shadeshuffle",
		description: "easily generate color palettes",
		href: "https://shadeshuffle.org",
	},
	{
		title: "qrgen",
		description: "generate qr codes from links",
		href: "https://qr.npitt.dev",
	},
	{
		title: "historicolor",
		description: "recolor old black & white photos",
		href: "https://historicolor.org",
	},
	{
		title: "ballpit",
		description: "ballpit effect using matter.js",
		href: "https://ballpit.npitt.dev",
	},
	{
		title: "pokedex",
		description: "made using tanstack query",
		href: "https://pokedex.npitt.dev",
	},
];

const Tools = () => {
	return (
		<section id="tools">
			<h2 className="text-lg flex items-center font-semibold">
				Tools & Fun
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#tools"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1">
				{tools.map((tool) => (
					<Link
						target="_blank"
						key={tool.title}
						className="text-muted-foreground hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit"
						href={tool.href}
					>
						{tool.title} - {tool.description}
					</Link>
				))}
			</div>
		</section>
	);
};

export default Tools;
