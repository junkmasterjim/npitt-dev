import About from "@/components/About";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Present from "@/components/Present";
import Tools from "@/components/Tools";
import RecentDot from "@/components/RecentDot";
import SpotlightPreview from "./dotdotdot/_components/SpotlightPreview";
import RecentBlog from "@/components/RecentBlog";
import { blogPosts } from "@/lib/utils";

const posts = blogPosts.reverse();
export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Present />
			<RecentDot dot={<SpotlightPreview />} />
			<RecentBlog
				posts={[
					posts[0],
					// posts[1],
					// posts[2]
				]}
			/>
			<Stack />
			<Projects />
			<Tools />
			<Connect />
		</>
	);
}
