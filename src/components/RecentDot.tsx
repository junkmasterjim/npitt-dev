import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const RecentDot = ({ dot }: { dot: React.ReactNode }) => {
	return (
		<section id="recentdot">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				{"[. . .][0]"}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#recentdot"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex flex-col gap-4">{dot}</div>
		</section>
	);
};

export default RecentDot;
