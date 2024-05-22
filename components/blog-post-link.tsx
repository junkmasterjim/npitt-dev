import { format } from "date-fns";
import Link from "next/link";
import { Dashes } from "./dashes";
import { Post } from "@/.contentlayer/generated";

const BlogPostLink = ({ post }: { post: Post }) => {
	return (
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
	);
};

export default BlogPostLink;
