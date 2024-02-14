import CursorPreview from "@/app/dotdotdot/_components/CursorPreview";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const RecentDot = () => {
	return (
		<section id="recentdot">
			<h2 className="text-lg flex items-center font-semibold pb-3">
				{"Latest [. . .]"}
				<Link className="text-muted-foreground" scroll href={"/#recentdot"}>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<CursorPreview />
		</section>
	);
};

export default RecentDot;
