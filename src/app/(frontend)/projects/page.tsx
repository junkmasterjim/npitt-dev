"use client"

import PageContainer from "@/components/custom/page-container"
import { useCMS } from "@/components/custom/providers"
import TooltipLink from "@/components/custom/tooltip-link"
import { Badge } from "@/components/ui/badge"
import { formatPayloadDate } from "@/lib/utils"
import { Project } from "@/payload-types"
import { Code2, Globe } from "lucide-react"

export default function ProjectsPage() {
  const { projects }: { projects: Array<Project> } = useCMS();
  const featuredProjects = projects.filter((proj) => proj["is featured"] == true);

  return (
    <PageContainer>
      <ul>
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
    </PageContainer >
  )

}

