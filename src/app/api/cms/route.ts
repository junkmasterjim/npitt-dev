import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  // Fetch all collections
  // slug must match exact slug of collection
  const [projects, media, homeContent, posts] = await Promise.all([
    payload.find({ collection: 'old-projects' }),
    payload.find({ collection: 'media' }),
    payload.find({ collection: 'home-content' }),
    payload.find({ collection: 'posts' }),
  ])

  return Response.json({
    projects: projects.docs,
    media: media.docs,
    homeContent: homeContent.docs,
    posts: posts.docs
  })
}
