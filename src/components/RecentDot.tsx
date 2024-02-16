import CursorPreview from "@/app/dotdotdot/_components/CursorPreview";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const RecentDot = ({ dot }: { dot: React.ReactNode }) => {
	return (
		<section id="recentdot">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				{"Latest [. . .]"}
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#recentdot"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			{dot}
		</section>
	);
};

export default RecentDot;
