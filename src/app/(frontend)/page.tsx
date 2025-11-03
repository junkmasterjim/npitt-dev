"use client"

import PageContainer from "@/components/custom/page-container"
import { cn, formatPayloadDate } from "@/lib/utils"
import { HomeContent, Project } from "@/payload-types"
import { Badge } from "@/components/ui/badge"
import { Code2, Github, Globe, Linkedin, Mail } from "lucide-react"
import TooltipLink from "@/components/custom/tooltip-link"
import { SlidingLink } from "@/components/custom/sliding-link"
import { useCMS } from "@/components/custom/providers"
import { RichText } from "@/components/custom/rich-text"
import { H2 } from "@/components/custom/h2"

export default function HomePage() {
  const { homeContent, projects, posts } = useCMS();
  const content: HomeContent = homeContent[0];
  const featuredProjects = projects.filter((proj) => proj["is featured"] == true);

  return (
    <PageContainer>
      {/* header */}
      <div className="w-fit border-b pb-2 mb-2">
        <h1 className="tracking-tighter font-semibold text-3xl leading-8">
          Noah <span className="invert bg-background text-foreground px-1">Riley</span> Pittman
        </h1>
        <H2 className="tracking-tighter text-foreground/60 font-medium leading-7">Full-stack developer; Multi-faceted creative.</H2>
      </div>

      <div className="flex flex-col gap-8">
        {/* bio */}
        <PkmnTextbox label="About">
          <RichText lexicalData={content.bio} />
        </PkmnTextbox>


        {/* contact */}
        <PkmnTextbox label="Connect" className="w-fit">
          <ul className="flex items-center gap-4">
            <li>
              <SlidingLink href={content.email} target="_blank">
                <span className="flex items-center gap-2">
                  <Mail />
                  Email
                </span>
              </SlidingLink>
            </li>
            <li>
              <SlidingLink href={content.github} target="_blank">
                <span className="flex items-center gap-2">
                  <Github />
                  Github
                </span>
              </SlidingLink>
            </li>
            <li>
              <SlidingLink href={content.linkedin} target="_blank">
                <span className="flex items-center gap-2">
                  <Linkedin />
                  LinkedIn
                </span>
              </SlidingLink>
            </li>
          </ul>
        </PkmnTextbox>

        {/* projects */}

        {/* {["Featured Projects", "All Projects"].map((p) => { */}
        {/*   // filter based on if we are in "Projects" or "Featured Projects" */}
        {/*   const projs = p === "Featured Projects" ? */}
        {/*     projects.filter((proj) => proj["is featured"] == true) : projects; */}
        {/**/}
        {/*   return ( */}
        {/*     <PkmnTextbox label={p} key={p}> */}
        {/*       <ul className="space-y-4"> */}
        {/*         {projs.map((p: Project, i) => { */}
        {/*           // get stack for each project */}
        {/*           const s: Array<{ name: string }> = p.stack as Array<{ name: string }> */}
        {/**/}
        {/*           return ( */}
        {/*             <li key={i}> */}
        {/*               <div className="flex items-center gap-2"> */}
        {/*                 <h4 className="text-md tracking-tighter italic">{p.title}</h4> */}
        {/*                 <TooltipLink href={p["project link"]} label="Live Website" content={<Globe size={16} />} /> */}
        {/*                 <TooltipLink href={p["repo link"]} label="Code Repository" content={<Code2 size={16} />} /> */}
        {/*               </div> */}
        {/*               <p className="text-sm tracking-tighter -mt-1 text-foreground/70">{formatPayloadDate(p.date)}</p> */}
        {/*               <p>{p.description}</p> */}
        {/*               <div className="flex items-center gap-1"> */}
        {/*                 {s.map((tech: any, i: number) => ( */}
        {/*                   <Badge className="rounded-none" key={i}>{tech.name}</Badge> */}
        {/*                 ))} */}
        {/*               </div> */}
        {/*             </li> */}
        {/*           ) */}
        {/*         })} */}
        {/*       </ul> */}
        {/*     </PkmnTextbox> */}
        {/*   ); */}
        {/* })} */}
        {/**/}

        {/* writing */}
        {/* <PkmnTextbox label="Writing"> */}
        {/*   <ul className="flex items-center gap-4 flex-wrap max-w-md"> */}
        {/*     {posts.map((p, i) => ( */}
        {/*       <li key={i}> */}
        {/*         <h4 className="italic">{p.title}</h4> */}
        {/*         <p className="-mt-0.5">{p.tagline}</p> */}
        {/*         <p className="text-sm tracking-tighter -mt-1 text-foreground/70">{formatPayloadDate(p.date)}</p> */}
        {/*       </li> */}
        {/*     ))} */}
        {/*   </ul> */}
        {/* </PkmnTextbox> */}

      </div>
    </PageContainer>
  )
}


function PkmnTextbox({ label, children, className }: { label?: string, children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("border-x-2 border-t-2 border-b-[3px] p-0.5 border-primary", className)}>
      {label && <H2 className=" -mt-4 ml-2 px-2 underline absolute bg-background">{label}</H2>}
      <div className="border-x-2 border-primary p-2 border-b-2 border-t-[3px]">
        {children}
      </div>
    </div>
  )
}
