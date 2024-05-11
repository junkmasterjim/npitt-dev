import { connect } from "@/config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaHashtag } from "react-icons/fa";

const Connect = () => {
	return (
		<section id="connect">
			<h2 className="text-lg font-semibold flex items-center">
				Connect
				<Link
					className="text-muted-foreground"
					aria-label="anchor"
					scroll
					href={"/#connect"}
				>
					<FaHashtag className="ml-2 h-3 w-3" />
				</Link>
			</h2>
			<div className="flex flex-col space-y-1 sm:text-base text-sm ">
				{connect.map((connection) => (
					<div className="flex gap-4" key={connection.title}>
						<p className="max-w-[6ch] w-full">{connection.title}</p>
						<Link
							className="flex items-center decoration-1 text-muted-foreground decoration-muted-foreground hover:text-foreground hover:decoration-foreground transition-colors border-b border-muted-foreground/0 hover:border-foreground "
							href={connection.href}
							target="_blank"
						>
							<p className="truncate">{connection.description}</p>
							<ArrowUpRight className="h-4 w-4 ml-1" />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default Connect;
