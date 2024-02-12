import About from "@/components/About";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Present from "@/components/Present";
import Tools from "@/components/Tools";

// TODO: add tools & small projects
// TODO: add blog

export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Present />
			<Stack />
			<Projects />
			<Tools />
			<Connect />
		</>
	);
}
