import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<section id="about">
			<h2 className="text-lg font-semibold flex items-center">
				About
				<Link className="text-muted-foreground" scroll href={"/#about"}>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<p>
				{`I'm Noah, a freelance full stack developer with a burning desire to
				progress. When I'm not building stunning web applications, I can be
				found reading, watching HBO, or on a nature walk with my wife.`}
			</p>
		</section>
	);
};

export default About;
