import { allPosts } from "@/.contentlayer/generated";
import BlogPostLink from "@/components/blog-post-link";
import { ContactDialog } from "@/components/contact-dialog";
import { Dashes } from "@/components/dashes";
import { ProjectLink } from "@/components/project-link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ALL_PROJECTS, CONNECT_LINKS } from "./config";

const Home = () => {
	return (
		<main className="space-y-20">
			<Section id="home">
				<div className="flex gap-2 items-center">
					<div>
						<Image
							height={72}
							width={72}
							src={"/avatar.jpeg"}
							alt="Noah"
							className="rounded-full border-4 shadow border-secondary"
						/>
					</div>

					<span>
						<h1 className="text-2xl sm:text-3xl font-bold">Hello!</h1>
						<h2 className="text-lg sm:text-xl font-bold text-muted-foreground">
							I'm Noah
						</h2>
					</span>
				</div>

				<p>
					I'm a full stack web developer & designer from eastern Canada. I'm a
					big fan of building stunning websites and applications with React,
					Next.js, and TypeScript. When I'm not coding, I like to read books
					(biographies mostly), make music, or go on nature walks with my wife.
				</p>

				<p>
					Presently, I'm a student and freelance design engineer, working part
					time at a paint store. If none of those, I'm working on my own side
					project, or trying to come up with a new one.
				</p>
			</Section>

			<Section id="connect">
				<SectionHeading>Connect with me</SectionHeading>

				<div className="flex flex-col gap-2">
					{CONNECT_LINKS.map((link) => (
						<span key={link.name}>
							{link.name.toLowerCase() === "email" ? (
								<>
									<ContactDialog
										trigger={
											<div
												key={link.name}
												className="flex gap-2 justify-between items-end group cursor-pointer"
											>
												<span>{link.name}</span>
												<Dashes className="group-hover:border-foreground border-foreground/10 mb-2" />
												{link.icon}
											</div>
										}
									/>
								</>
							) : (
								<>
									<Link
										key={link.name}
										href={link.href}
										target="_blank"
										className="flex gap-2 justify-between items-end group"
									>
										<span>{link.name}</span>
										<Dashes className="group-hover:border-foreground border-foreground/10 mb-2" />
										{link.icon}
									</Link>
								</>
							)}
						</span>
					))}
				</div>
			</Section>

			<Section id="projects">
				<SectionHeading>Featured projects</SectionHeading>

				<div className="flex flex-col gap-6">
					{ALL_PROJECTS.slice(0, 3).map((link) => (
						<ProjectLink key={link.name} link={link} />
					))}
				</div>
				<div className="w-full flex justify-center items-center">
					<Link
						href={"/projects"}
						className="group inline-flex gap-2 items-center text-sm  text-muted-foreground h-9 px-2 hover:underline"
					>
						All projects{" "}
						<ArrowRightIcon className="size-5 group-hover:-rotate-[30deg] transition-all duration-200" />
					</Link>
				</div>
			</Section>

			<Section id="blog">
				<SectionHeading>Check out my blog</SectionHeading>

				<div className="flex flex-col gap-6">
					<BlogPostLink post={allPosts[allPosts.length - 1]} />
				</div>
				<div className="w-full flex justify-center items-center">
					<Link
						href={"/blog"}
						className="group inline-flex gap-2 items-center text-sm  text-muted-foreground h-9 px-2 hover:underline"
					>
						All posts{" "}
						<ArrowRightIcon className="size-5 group-hover:-rotate-[30deg] transition-all duration-200" />
					</Link>
				</div>
			</Section>
		</main>
	);
};

export default Home;
