import { tools } from "@/config";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

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
