import { allPosts } from "@/.contentlayer/generated";
import { Dashes } from "@/components/dashes";
import { RouteHeading } from "@/components/route-heading";
import { format } from "date-fns";
import Link from "next/link";

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
					<Link key={post.slug} href={`/blog/${post.slug}`} className="group">
						<div key={post.title}>
							<h2>{post.title}</h2>
							<div className="flex items-center gap-4">
								<p className="text-sm text-muted-foreground whitespace-nowrap pl-2 border-l-4">
									{format(post.date, "MMMM d, yyyy")}
								</p>
								<Dashes className="group-hover:border-foreground border-foreground/10 shrink" />
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Blog;
