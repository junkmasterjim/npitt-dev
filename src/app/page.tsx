import About from "@/components/About";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Tools from "@/components/Tools";
import { blogPosts } from "@/lib/utils";
import RecentDot from "@/components/RecentDot";
import DrawerNavPreview from "./dotdotdot/_components/drawer-nav-preview";

const posts = blogPosts.reverse();

export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Stack />
			<Projects />
			<Tools />
			<RecentDot dot={<DrawerNavPreview />} />
			<Connect />
		</>
	);
}
