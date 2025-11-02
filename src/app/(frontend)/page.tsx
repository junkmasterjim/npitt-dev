"use client"

import PageContainer from "@/components/custom/page-container"
import { fetchCMSData } from "@/lib/utils"
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
      <h1 className="tracking-tight">Noah <span>Riley</span> Pittman</h1>
      <h3>Full Stack Developer, Multi-Faceted Creative</h3>

      {/* bio */}
      {content.bio.root.children.map((child: any, i: number) => (
        <p key={i}>{child.children[0].text}</p>
      ))}

      {/* contact */}
      <h3>Connect</h3>
      <ul>
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
      <h3>Projects</h3>
      <ul>
        {["", "", ""].map((str, i) => (
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
      <h3>Writing</h3>
      <ul>
        {["", "", ""].map((str, i) => (
          <li key={i}>
            <h4>Title</h4>
            <p>Description</p>
          </li>
        ))}
      </ul>
    </PageContainer>
  )
}
