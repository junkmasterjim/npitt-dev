import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Download } from "lucide-react";

const projects: {
	href: string;
	title: string;
	description: string;
	stack: string[];
	repo?: string;
	download?: string;
}[] = [
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
	// {

	// CODE IS NOT UP TO STANDARD TO BE IN PORTFOLIO

	// 	href: "https://shadeshuffle.org",
	// 	title: "ShadeShuffle - Color Palette Generator",
	// 	description: "Generate color palettes with the click of a button.",
	// 	stack: ["Next.js", "Tailwind CSS"],
	// },
	{
		href: "https://donebyhd.com",
		title: "DoneByHD - Portfolio",
		description: "Portfolio website for a freelance designer.",
		stack: ["Next.js", "Tailwind CSS", "Prisma", "MySQL", "Auth"],
		repo: "https://github.com/noahpittman/donebyhd",
	},
];

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				Projects{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#projects"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
				<span aria-hidden className="text-muted-foreground/50 text-sm ml-2">
					(sorted by most recent)
				</span>
			</h2>

			<div className="grid grid-cols-1 gap-4">
				{projects.map((project, i) => (
					<div
						className={`flex ${
							i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
						} gap-4 flex-col`}
						key={i}
					>
						<Link
							key={project.title}
							target="_blank"
							href={project.href}
							className="md:hover:scale-[1.01] bg-primary/25 md:hover:bg-primary/50 dark:bg-primary-foreground/20 dark:md:hover:bg-primary/10 rounded-lg px-4 py-3 transition-all space-y-2
							border-border/10 dark:border-border/10 border  dark:shadow-accent/10 hover:shadow sm:w-3/4"
						>
							<h3 className="text-lg font-semibold">{project.title}</h3>
							<p className="text-muted-foreground text-sm">
								{project.description}
							</p>
							<div className="flex flex-wrap items-center gap-4">
								{project.stack.map((tech) => (
									<Badge className="opacity-50" key={tech}>
										{tech}
									</Badge>
								))}
							</div>
						</Link>
						{(project.repo || project.download) && (
							<div
								className="sm:w-1/4 md:hover:scale-[1.01] bg-primary/25 md:hover:bg-primary/50 dark:bg-primary-foreground/20 dark:md:hover:bg-primary/10 rounded-lg px-4 py-3 transition-all
							border-border/10 dark:border-border/10 border  dark:shadow-accent/10 hover:shadow flex flex-row sm:flex-col justify-center items-center gap-4 flex-wrap"
							>
								{project.repo && (
									<Button asChild variant={"ghost"}>
										<Link href={project.repo} target="_blank">
											<GitHubLogoIcon className="size-5 mr-2" />
											Repo
										</Link>
									</Button>
								)}
								{project.download && (
									<Button asChild variant={"ghost"}>
										<Link
											href={project.download}
											target="_blank"
											className="self-center justify-self-center"
										>
											<Download className="size-5 mr-2" />
											Download
										</Link>
									</Button>
								)}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
