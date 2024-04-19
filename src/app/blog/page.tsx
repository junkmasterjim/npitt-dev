import Header from "@/components/Header";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { blogPosts } from "@/lib/utils";
import Link from "next/link";

function Page() {
	return (
		<div className="grid grid-cols-1 gap-4">
			<Header>
				<h2 className="font-medium text-2xl tracking-wide text-muted-foreground">
					blog
				</h2>
			</Header>

			{blogPosts.reverse().map((post, i) => (
				<Link key={i} href={`/blog/${post.href}`}>
					<Card>
						<CardHeader>
							<CardTitle>{post.title}</CardTitle>
							<CardDescription>{post.date}</CardDescription>
						</CardHeader>
					</Card>
				</Link>
			))}
		</div>
	);
}

export default Page;
