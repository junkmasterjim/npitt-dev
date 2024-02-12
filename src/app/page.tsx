import About from "@/components/About";
import Header from "@/components/Header";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";

export default function Home() {
	return (
		<>
			<Header />
			<About />
			<Stack />
			<Projects />
			<Connect />
		</>
	);
}
