import Link from "next/link";
import { Dashes, Section, SectionHeading } from "../page";
import { ALL_PROJECTS } from "../config";
import Image from "next/image";

const Projects = () => {
	return (
		<>
			<Section id="projects">
				<div className="flex flex-col gap-6">
					{ALL_PROJECTS.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className="flex gap-2 justify-between items-end group"
						>
							<div className="flex flex-col gap-1">
								<span className="whitespace-nowrap">{link.name}</span>
								<span className="text-sm text-muted-foreground w-fit md:whitespace-nowrap">
									{link.desc}
								</span>
							</div>
							<Dashes className="group-hover:border-foreground border-foreground/10 mb-1" />
							<div className="size-12 min-w-12 bg-secondary overflow-hidden rounded-lg shadow-md relative -top-2">
								<Image
									src={link.src}
									alt={link.name}
									width={128}
									height={128}
									className="object-cover w-full h-full"
								/>
							</div>
						</Link>
					))}
				</div>
			</Section>
		</>
	);
};

export default Projects;
