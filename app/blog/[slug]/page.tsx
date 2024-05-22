import { format } from "date-fns";
import { allPosts } from "@/.contentlayer/generated";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
	return { title: post.title };
};

const BlogPost = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
	if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

	return (
		<article>
			<div className="mb-8 relative mt-4">
				<Link href="/blog">
					<Button
						className="absolute -top-[40px] right-0 text-xs"
						variant={"outline"}
						size={"sm"}
					>
						Back to all posts
					</Button>
				</Link>

				<span className="prose">
					<h1>{post.title}</h1>
				</span>
				<time
					dateTime={post.date}
					className="mb-1 text-xs text-muted-foreground"
				>
					{format(post.date, "LLLL d, yyyy")}
				</time>
			</div>
			<div
				className="[&>*]:mb-3 [&>*:last-child]:mb-0 sm:prose prose-xs"
				dangerouslySetInnerHTML={{ __html: post.body.html }}
			/>
		</article>
	);
};

export default BlogPost;
