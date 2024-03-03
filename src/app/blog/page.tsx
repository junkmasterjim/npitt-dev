import { blogPosts } from "@/lib/utils";
import Link from "next/link";

function Page() {
	return (
		<div className="grid grid-cols-2 gap-4">
			{blogPosts.reverse().map((post, i) => (
				<Link
					key={i}
					href={`/blog/${post.href}`}
					className="md:hover:scale-[1.01] bg-primary/25 md:hover:bg-primary/50 dark:bg-primary-foreground/20 dark:md:hover:bg-primary/10 rounded-lg px-4 py-3 transition-all space-y-2 border-border/10 dark:border-border/10 border dark:shadow-accent/10 hover:shadow "
				>
					<h3 className="text-lg font-semibold">{post.title}</h3>
					<p className="text-muted-foreground text-xs">{post.date}</p>
				</Link>
			))}
		</div>
	);
}

export default Page;
