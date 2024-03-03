import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const RecentBlog = ({
	posts,
}: {
	posts: {
		title: string;
		date: string;
		href: string;
	}[];
}) => {
	return (
		<section id="recentblog">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				{"Latest Blog Posts"}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#recentblog"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex sm:text-base text-sm flex-col gap-1">
				{posts.map((post) => (
					<Link
						key={post.title}
						className="text-muted-foreground hover:text-foreground border-b border-border/0 hover:border-foreground transition-colors w-fit"
						href={`/blog/${post.href}`}
					>
						{post.title} - {post.date}
					</Link>
				))}
			</div>
		</section>
	);
};

export default RecentBlog;
