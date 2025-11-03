"use client"

import PageContainer from "@/components/custom/page-container";
import { useCMS } from "@/components/custom/providers";
import { SlidingLink } from "@/components/custom/sliding-link";

export default function PostsPage() {
  const { posts } = useCMS();

  console.log(posts)

  return (
    <PageContainer>
      <div>
        {posts.map((p) => (
          <div key={p.id}>
            <SlidingLink href={`/posts/${p.slug}`}>
              {p.type}: {p.slug}
            </SlidingLink>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

