// lib/api.ts
import { HomeContent, Media, Post, Project } from "@/payload-types"

export async function fetchCMSData(): Promise<CMSData> {
  const baseUrl = process.env.NEXT_PUBLIC_URL ||
    (process.env.NEXT_PUBLIC_SERVER_URL ? `${process.env.NEXT_PUBLIC_SERVER_URL}` : 'http://localhost:3000')

  const res = await fetch(`${baseUrl}/api/cms`, {
    cache: 'force-cache',
  })

  if (!res.ok) throw new Error('Failed to fetch CMS data')
  return res.json()
}

export interface CMSData {
  projects: Project[];
  media: Media[];
  homeContent: HomeContent[];
  posts: Post[];

}
