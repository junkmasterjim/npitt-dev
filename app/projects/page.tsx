import { ALL_PROJECTS } from "../config";
import { RouteHeading } from "@/components/route-heading";
import { ProjectLink } from "@/components/project-link";
import { Section } from "@/components/section";

const Projects = () => {
	return (
		<>
			<Section id="projects">
				<RouteHeading
					heading="Projects"
					description="You'll find my projects listed here, not including my freelance work. I'm always working on something new, and most of them are open source. If you're interested in working with me, check out my GitHub. Like what you see on a project? Feel free to contribute! I'll never turn down a new idea."
				/>
				<div className="flex flex-col gap-6">
					{ALL_PROJECTS.map((link) => (
						<ProjectLink key={link.name} link={link} />
					))}
				</div>
			</Section>
		</>
	);
};

export default Projects;
