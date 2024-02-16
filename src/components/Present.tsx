import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

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
				{`Currently I work as a manager at a corporate paint store. In my free
				time I freelance & work on my own projects! I'm always looking for new
				things to work on, so if you have a project in mind, feel free to
				`}
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

export default Present;
