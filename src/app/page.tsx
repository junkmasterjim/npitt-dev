import About from "@/components/About";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Present from "@/components/Present";
import Tools from "@/components/Tools";
import RecentDot from "@/components/RecentDot";
import CursorPreview from "./dotdotdot/_components/CursorPreview";

// TODO: add tools & small projects
// TODO: add blog

export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Present />
			<RecentDot dot={<CursorPreview />} />
			<Stack />
			<Projects />
			<Tools />
			<Connect />
		</>
	);
}
