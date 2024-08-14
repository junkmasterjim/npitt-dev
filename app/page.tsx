import { allPosts } from "@/.contentlayer/generated";
import BlogPostLink from "@/components/blog-post-link";
import { ContactDialog } from "@/components/contact-dialog";
import { Dashes } from "@/components/dashes";
import { ProjectLink } from "@/components/project-link";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { WORK, CONNECT_LINKS, SIDE_PROJECTS } from "./config";

const Home = () => {
  return (
    <main className="space-y-16">
      <Section id="home">
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tighter leading-none">
            Noah Pittman
          </h1>
          <div className="flex gap-2 items-center text-sm text-muted-foreground tracking-normal uppercase">
            <p>Design Engineer</p>
            <p>•</p>
            <p>Full Stack Developer</p>
          </div>
        </div>
        <div className="h-px w-full bg-foreground/10 mt-4" />

        <SectionHeading>Metadata</SectionHeading>

        <p className="leading-tight">
          I build websites and applications with React & Typescript. I like
          going to the gym, and spending time with my wife.
        </p>

        <p className="leading-tight">
          I'm currently a student, and I do freelance design & development work.
          If you're interested in working with me, feel free to reach out!
        </p>
      </Section>

      <Section id="connect">
        <SectionHeading>Connect</SectionHeading>

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
        <SectionHeading>Projects</SectionHeading>

        <div className="flex flex-col gap-6">
          {WORK.slice(0, 3).map((link) => (
            <ProjectLink key={link.name} link={link} />
          ))}
          {SIDE_PROJECTS.slice(0, 3).map((link) => (
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
        <SectionHeading>Writing</SectionHeading>

        <div className="flex flex-col gap-6">
          <BlogPostLink post={allPosts[0]} />
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
