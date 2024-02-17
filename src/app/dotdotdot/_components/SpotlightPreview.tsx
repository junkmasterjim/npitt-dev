import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

const SpotlightPreview = () => {
	return (
		<div
			aria-hidden
			className="border-border/10 dark:border-border/50 rounded-lg overflow-hidden border bg-card/75 dark:shadow-card/25 shadow-sm"
		>
			{/* Preview buttons */}
			<div className="flex justify-between z-50 h-0">
				<div />

				<Link
					prefetch
					className="relative top-3 right-4 z"
					href={"/dotdotdot/spotlight"}
					tabIndex={-1}
				>
					<Button
						tabIndex={-1}
						variant={"ghost"}
						className="text-muted-foreground"
						name="cursor-preview"
						size={"icon"}
					>
						<ArrowRight className="h-5 w-5" />
					</Button>
				</Link>
			</div>

			{/* Preview content */}
			<SpotlightCard
				byline="Hover me"
				header="Spotlight"
				description="Hover this card to view the spotlight effect. Click the arrow to view the code & learn more."
				className="max-w-none bg-card dark:bg-card border-none rounded-lg"
			>
				<Link
					prefetch
					className="absolute top-3 right-4"
					href={"/dotdotdot/spotlight"}
					tabIndex={-1}
				>
					<Button
						tabIndex={-1}
						variant={"ghost"}
						className="text-muted-foreground"
						name="cursor-preview"
						size={"icon"}
					>
						<ArrowRight className="h-5 w-5" />
					</Button>
				</Link>
			</SpotlightCard>
		</div>
	);
};

export default SpotlightPreview;
