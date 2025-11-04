// lib/api.ts
import { HomeContent, Media, Post, OldProject as Project } from "@/payload-types"
import configPromise from '@payload-config'
import { getPayload } from "payload";
import { unstable_cache } from 'next/cache';

export const fetchCMSData = unstable_cache(
  async (): Promise<CMSData> => {
    const payload = await getPayload({
      config: configPromise
    });

    const [projects, media, homeContent, posts] = await Promise.all([
      payload.find({ collection: 'old-projects' }),
      payload.find({ collection: 'media' }),
      payload.find({ collection: 'home-content' }),
      payload.find({ collection: 'posts' }),
    ]);

    return {
      projects: projects.docs,
      media: media.docs,
      homeContent: homeContent.docs,
      posts: posts.docs,
    };
  },
  ['cms-data'], // Cache key
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ['cms-data'], // For on-demand revalidation
  }
);

export interface CMSData {
  projects: Project[];
  media: Media[];
  homeContent: HomeContent[];
  posts: Post[];
}
