import { Button } from "@/components/ui/button";
import SpotlightCard from "../_components/SpotlightCard";
import { PreviewHeader } from "../_components/layout/PreviewHeader";
import { CodePreview } from "../_components/layout/CodePreview";

import { sample } from "./_codeSample";

const Page = () => {
	return (
		<>
			<PreviewHeader title="Spotlight Card" created="February 2024" />
			<SpotlightCard
				weight="normal"
				byline="Spotlight"
				header="Hover me!"
				description="Hover this card to view the spotlight effect."
				rounded="lg"
				className="bg-card max-w-none justify-between flex-1"
			>
				<div className="grid h-full flex-1 gap-8 justify-between">
					<div className="space-y-2">
						<p className="text-muted-foreground">
							There are props to customize the byline, header, and body text, as
							well as the color and opacity of the spotlight effect. Of course,
							you can also customize the card&apos;s appearance with Tailwind
							classes.
						</p>
						<p className="text-muted-foreground opacity-75">
							You can also render React children in this card like this{" "}
							<code className="font-mono bg-neutral-300 dark:bg-neutral-900 px-1 py-px rounded-md">
								{`<p>`}
							</code>{" "}
							tag
						</p>
					</div>
					<div className="flex gap-4">
						<Button variant={"default"}>Or</Button>
						<Button variant={"ghost"}>Even</Button>
						<Button variant={"secondary"}>Add</Button>
						<Button variant={"outline"}>Buttons</Button>
					</div>
				</div>
			</SpotlightCard>

			<CodePreview code={sample} />
		</>
	);
};

export default Page;
