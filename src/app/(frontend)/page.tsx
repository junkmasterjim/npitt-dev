"use client"

import PageContainer from "@/components/custom/page-container"
import { cn, formatPayloadDate } from "@/lib/utils"
import { fetchCMSData, CMSData } from "@/lib/api"
import { HomeContent, Project } from "@/payload-types"
import { useQuery } from "@tanstack/react-query"
import { Badge } from "@/components/ui/badge"
import { Code2, Globe } from "lucide-react"
import TooltipLink from "@/components/custom/tooltip-link"
import { SlidingLink } from "@/components/custom/sliding-link"

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['cms-data'],
    queryFn: fetchCMSData,
  })

  const d: CMSData = data

  const content: HomeContent = d.homeContent[0];
  const projects: Array<Project> = d.projects;

  return (
    <PageContainer>
      {/* header */}
      <div className="w-fit border-b pb-2 mb-2">
        <h1 className="tracking-tighter font-semibold text-3xl leading-8">
          Noah <span className="bg-foreground text-background px-1">Riley</span> Pittman
        </h1>
        <H2 className="tracking-tighter text-foreground/60 font-medium leading-7">Full-stack developer; Multi-faceted creative.</H2>
      </div>

      {/* bio */}
      {content.bio.root.children.map((child: any, i: number) => (
        <p key={i} >{child.children[0].text}</p>
      ))}

      {/* contact */}
      <H2 className="w-fit border-b mt-3">Connect</H2>
      <ul className="flex items-center gap-4">
        <SlidingLink href={content.email} target="_blank">
          <li>Email</li>
        </SlidingLink>
        <SlidingLink href={content.github} target="_blank">
          <li>Github</li>
        </SlidingLink>
        <SlidingLink href={content.linkedin} target="_blank">
          <li>LinkedIn</li>
        </SlidingLink>
      </ul>

      {/* projects */}
      <H2 className="w-fit border-b mt-3">Projects</H2>
      <ul className="flex items-center gap-4 flex-wrap ">
        {projects.map((p: Project, i) => {

          const s: Array<{ name: string }> = p.stack as Array<{ name: string }>

          return (
            <li key={i}>
              <div className="flex items-center gap-2">
                <h4 className="text-md tracking-tighter italic">{p.title}</h4>
                <TooltipLink href={p["project link"]} label="Live Website" content={<Globe size={16} />} />
                <TooltipLink href={p["repo link"]} label="Code Repository" content={<Code2 size={16} />} />
              </div>
              <p className="text-sm tracking-tighter -mt-1 text-foreground/70">{formatPayloadDate(p.date)}</p>
              <p>{p.description}</p>
              <div className="flex items-center gap-1">
                {s.map((tech: any, i: number) => (
                  <Badge className="rounded-none" key={i}>{tech.name}</Badge>
                ))}
              </div>
            </li>
          )
        })}
      </ul>

      {/* writing */}
      <H2 className="w-fit border-b mt-3">Writing</H2>
      <ul className="flex items-center gap-4 flex-wrap max-w-md">
        {['', '', '', '', '', ''].map((str, i) => (
          <li key={i}>
            <h4>Title</h4>
            <p>Description</p>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}

function H2({ children, className }: { children: React.ReactNode, className: string }) {
  return <h2 className={cn("text-lg tracking-tighter text-foreground/70 font-medium leading-7", className)}>{children}</h2>
}

