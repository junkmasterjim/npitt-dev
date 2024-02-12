import Link from "next/link";
import { Badge } from "./ui/badge";

const projects: {
	href: string;
	title: string;
	description: string;
	stack: string[];
}[] = [
	{
		href: "https://devpillar.org",
		title: "DevPillar - Resource Library",
		description: "Hand-picked resource library for developers & designers.",
		stack: ["Next.js", "Tailwind CSS", "PostgreSQL", "Auth"],
	},
	{
		href: "https://shadeshuffle.org",
		title: "ShadeShuffle - Color Palette Generator",
		description: "Generate color palettes with the click of a button.",
		stack: ["Next.js", "Tailwind CSS"],
	},
	{
		href: "https://donebyhd.com",
		title: "DoneByHD - Portfolio",
		description: "Portfolio website for a freelance designer.",
		stack: ["Next.js", "Tailwind CSS", "Prisma", "MySQL"],
	},
];

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-lg font-bold pb-3">
				Projects{" "}
				<span className="text-muted-foreground/50 text-sm ml-2">
					(sorted by most recent)
				</span>
			</h2>

			<div className="grid grid-cols-1 gap-4">
				{projects.map((project) => (
					<Link
						key={project.title}
						target="_blank"
						href={project.href}
						className="md:hover:scale-[1.01] bg-primary/25 md:hover:bg-primary/50 dark:bg-primary/5 dark:md:hover:bg-primary/10 rounded-lg px-4 py-3 transition-all space-y-2"
					>
						<h3 className="text-lg font-semibold">{project.title}</h3>
						<p className="text-muted-foreground text-sm">
							{project.description}
						</p>
						<div className="flex flex-wrap items-center gap-4">
							{project.stack.map((tech) => (
								<Badge key={tech}>{tech}</Badge>
							))}
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Projects;
