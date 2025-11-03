"use client"

import PageContainer from "@/components/custom/page-container";
import { useCMS } from "@/components/custom/providers";

export default function WritingPage() {
  const { caseStudies, blogPosts } = useCMS();


  return (
    <PageContainer>
      <></>
    </PageContainer>
  )
}

