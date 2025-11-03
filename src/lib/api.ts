import { BlogPost, CaseStudy, HomeContent, Project } from "@/payload-types"

export async function fetchCMSData() {
  const res = await fetch('/api/cms')
  if (!res.ok) throw new Error('Failed to fetch CMS data')
  return res.json()
}

export type CMSData = {
  projects: Project[],
  homeContent: HomeContent[],
  caseStudies: CaseStudy[],
  blogPosts: BlogPost[]
}
