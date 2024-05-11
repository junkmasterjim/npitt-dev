import Link from "next/link";
import { Badge } from "./ui/badge";
import { FaHashtag } from "react-icons/fa";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Download, Globe } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { projects } from "@/config";

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
					<Card key={i} className="shadow-sm">
						<CardHeader>
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<Separator />
							<div className="flex items-center flex-wrap gap-2">
								{project.href && (
									<Link target="_blank" href={project.href}>
										<Button>
											<Globe className="mr-2 size-4" />
											Website
										</Button>
									</Link>
								)}
								{project.repo && (
									<Link target="_blank" href={project.repo}>
										<Button>
											<GitHubLogoIcon className="mr-2 size-4" />
											Repo
										</Button>
									</Link>
								)}
								{project.download && (
									<Link target="_blank" href={project.download}>
										<Button>
											<Download className="mr-2 size-4" />
											Download
										</Button>
									</Link>
								)}
							</div>
							<div className="flex flex-wrap items-center justify-between gap-4">
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<Badge className="opacity-50" key={tech}>
											{tech}
										</Badge>
									))}
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Projects;
