"use client";

import { H2 } from '@/components/custom/h2';
import { RichText } from '@/components/custom/rich-text';
import { Separator } from '@/components/ui/separator';
import { formatPayloadDate } from '@/lib/utils';
import { SlidingLink } from '@/components/custom/sliding-link';
import PageContainer from '@/components/custom/page-container';
import { useCMS } from '@/components/custom/providers';
import { usePathname } from 'next/navigation';

export default function PostPage() {
  const { posts } = useCMS();
  const pathname = usePathname();
  const postPath = pathname.split("/posts/")[1]

  const post = posts.find((p) => p.slug == postPath)


  if (!post) {
    // Handle 404
    return <div>Post not found</div>;
  }

  return (
    <PageContainer>
      {/* post header */}
      <div className='flex items-center justify-between tracking-tight text-muted-foreground leading-none mt-2'>
        <p className=''>{post.type}</p>
        <SlidingLink href={"/posts"} className='text-muted-foreground' classHovered='text-foreground underline'>Return to posts</SlidingLink>
      </div>
      <h1 className='text-4xl font-semibold tracking-tighter'>
        {post.title}
      </h1>
      <H2>{post.tagline}</H2>
      <p className='tracking-tighter text-xs, text-foreground/70 -mt-1'>
        {formatPayloadDate(post.date)}
      </p>
      <Separator className='mb-4' />

      {/* post data */}
      <RichText lexicalData={post.content} />
    </PageContainer>
  );
}
