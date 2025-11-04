import { OldProject as Project } from "@/payload-types";
import TooltipLink from "@/components/custom/tooltip-link";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe } from "lucide-react";
import { formatPayloadDate } from "@/lib/utils";

export function ProjectDisplay({ project }: { project: Project }) {
  const p: Project = project;
  const s: Array<{ name: string }> = p.stack as Array<{ name: string }>

  return (
    <div>
      <div className="flex items-center gap-2">
        <h4 className="text-md tracking-tighter italic">{p.title}</h4>
        <TooltipLink href={p["project link"]} label="Live Website" content={<Globe size={16} />} />
        <TooltipLink href={p["repo link"]} label="Code Repository" content={<Code2 size={16} />} />
      </div>
      <p className="text-sm tracking-tighter -mt-1 text-foreground/70">{formatPayloadDate(p.date)}</p>
      <p>{p.description}</p>
      <div className="flex items-center gap-1 flex-wrap mt-1">
        {s.map((tech: any, i: number) => (
          <Badge className="rounded-none" key={i}>{tech.name}</Badge>
        ))}
      </div>
    </div>
  )
}
