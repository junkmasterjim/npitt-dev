import { allPosts } from "@/.contentlayer/generated";
import BlogPostLink from "@/components/blog-post-link";
import { RouteHeading } from "@/components/route-heading";

const Blog = () => {
	return (
		<>
			<div>
				{/* <h1 className="text-4xl font-bold">Blog</h1> */}
				<RouteHeading
					heading="Blog"
					description="Here you'll find my general thoughts and musings on technology, design, and the world around me. Updated from time to time."
				/>
			</div>
			<div className="flex flex-col gap-8">
				{allPosts.map((post) => (
					<BlogPostLink key={post.slug} post={post} />
				))}
			</div>
		</>
	);
};

export default Blog;
