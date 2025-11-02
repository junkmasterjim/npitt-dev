"use client"

import PageContainer from "@/components/custom/page-container"
import { cn, fetchCMSData } from "@/lib/utils"
import { HomeContent } from "@/payload-types"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['cms-data'],
    queryFn: fetchCMSData,
  })

  const content: HomeContent = data.homeContent[0];

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
        <p key={i} className="max-w-[80ch]">{child.children[0].text}</p>
      ))}

      {/* contact */}
      <H2 className="w-fit border-b mt-3">Connect</H2>
      <ul className="flex items-center gap-4">
        <Link href={content.email} target="_blank">
          <li>Email</li>
        </Link>
        <Link href={content.github} target="_blank">
          <li>Github</li>
        </Link>
        <Link href={content.linkedin} target="_blank">
          <li>Linkedin</li>
        </Link>
      </ul>

      {/* projects */}
      <H2 className="w-fit border-b mt-3">Projects</H2>
      <ul className="flex items-center gap-4 flex-wrap max-w-md">
        {['', '', '', '', '', ''].map((str, i) => (
          <li key={i}>
            <h4>Project Title</h4>
            <p>Project description</p>
            <div>
              <span>stack</span>
              <span>stack</span>
              <span>stack</span>
            </div>
          </li>
        ))}
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
  return <h2 className={cn("tracking-tighter text-foreground/60 font-medium leading-7", className)}>{children}</h2>
}
