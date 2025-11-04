// lib/api.ts
import { HomeContent, Media, Post, OldProject as Project } from "@/payload-types"
import configPromise from '@payload-config'
import { getPayload } from "payload";

export async function fetchCMSData(): Promise<CMSData> {
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
}

export interface CMSData {
  projects: Project[];
  media: Media[];
  homeContent: HomeContent[];
  posts: Post[];

}
