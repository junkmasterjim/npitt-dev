import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./SpotlightCard";

const SpotlightPreview = () => {
	return (
		<>
			<SpotlightCard
				byline="Hover me"
				header="Spotlight"
				rounded="lg"
				description="Hover this card to view the spotlight effect. Click the arrow to view the code & learn more."
				className="max-w-none bg-card dark:bg-card rounded-lg"
			>
				<Link
					prefetch
					className="absolute top-3 right-4"
					href={"/dotdotdot/spotlight"}
					tabIndex={-1}
				>
					<Button
						tabIndex={-1}
						variant={"outline"}
						className="text-muted-foreground"
						name="cursor-preview"
					>
						Code
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
			</SpotlightCard>
		</>
	);
};

export default SpotlightPreview;
