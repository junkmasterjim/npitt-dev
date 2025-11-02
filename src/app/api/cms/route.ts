import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  // Fetch all collections
  // slug must match exact slug of collection
  const [projects, homeContent, caseStudies, blogPosts] = await Promise.all([
    payload.find({ collection: 'projects' }),
    payload.find({ collection: 'home-content' }),
    payload.find({ collection: 'case-studies' }),
    payload.find({ collection: 'blog-posts' }),
  ])

  return Response.json({
    projects: projects.docs,
    homeContent: homeContent.docs,
    caseStudies: caseStudies.docs,
    blogPosts: blogPosts.docs,
  })
}
