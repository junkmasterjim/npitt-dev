import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

export default function TooltipLink({ href, content, label }: { href: string, content: React.ReactNode, label: string }) {
  return (
    <Tooltip>
      <TooltipContent>
        {label}
      </TooltipContent>
      <TooltipTrigger>
        <Link href={href} target="_blank">
          {content}
        </Link>
      </TooltipTrigger>
    </Tooltip>
  )
}
