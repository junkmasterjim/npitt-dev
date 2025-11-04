"use client"

import PageContainer from "@/components/custom/page-container";
import { useCMS } from "@/components/custom/providers";
import { SlidingLink } from "@/components/custom/sliding-link";
import { formatPayloadDate } from "@/lib/utils";

export default function PostsPage() {
  const { posts } = useCMS();

  return (
    <PageContainer>
      <div>
        {posts.map((p) => (
          <div key={p.id}>
            <SlidingLink className="text-muted-foreground" classHovered="text-foreground underline" href={`/posts/${p.slug}`}>
              {p.type}: {p.title} - {formatPayloadDate(p.createdAt)}
            </SlidingLink>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

