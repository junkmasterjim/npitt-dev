import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const tools: { title: string; description: string; href: string }[] = [
	{
		title: "shadeshuffle",
		description: "easily generate color palettes",
		href: "https://historicolor.org",
	},
	{
		title: "summaraize",
		description: "summarize articles with chatgpt",
		href: "https://trysummaraize.vercel.app",
	},
	{
		title: "qrgen",
		description: "generate qr codes from links",
		href: "https://qrgen-omega.vercel.app",
	},
	{
		title: "historicolor",
		description: "recolor old black & white photos",
		href: "https://historicolor.org",
	},
];

const Tools = () => {
	return (
		<section id="tools">
			<h2 className="text-lg flex items-center font-semibold">
				Tools
				<Link className="text-muted-foreground" scroll href={"/#tools"}>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<ul className="flex sm:text-base text-sm flex-col gap-1">
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
			</ul>
		</section>
	);
};

export default Tools;
