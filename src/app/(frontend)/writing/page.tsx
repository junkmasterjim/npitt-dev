"use client"

import PageContainer from "@/components/custom/page-container";
import { useCMS } from "@/components/custom/providers";
import { RichText } from "@/components/custom/rich-text";

export default function WritingPage() {
  const { posts } = useCMS();

  return (
    <PageContainer>
      <div>
        case studies
        {posts.map((study) => (
          <div key={study.id}>
            <RichText lexicalData={study.content} />
          </div>
        ))}
      </div>
    </PageContainer>
  )
}

