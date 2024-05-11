import { about, present } from "@/config";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const About = () => {
	return (
		<>
			<section id="about">
				<h2 className="text-lg font-semibold flex items-center">
					About
					<Link
						className="text-muted-foreground"
						aria-label="anchor"
						scroll
						href={"/#about"}
					>
						<FaHashtag className="ml-2 h-3 w-3" />
					</Link>
				</h2>
				<p>{about}</p>
			</section>
			<Present />
		</>
	);
};

export default About;

const Present = () => {
	return (
		<section id="present">
			<h2 className="text-lg flex items-center font-semibold">
				Present{" "}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#present"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<p>
				{present}
				<Link
					className="text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground transition-colors"
					target="_blank"
					href="mailto:noahpittman00@gmail.com?subject=Hello!&body=Hi, my name is [name] and I have a project that I would like to discuss with you."
					type="email"
				>
					contact me.
				</Link>
			</p>
		</section>
	);
};
