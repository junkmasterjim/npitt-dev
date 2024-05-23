import { CodePreview } from "@/components/code-preview";
import { RouteHeading } from "@/components/route-heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Lab = () => {
	return (
		<>
			<div>
				<RouteHeading
					heading="Lab"
					description="Welcome to my lab. You'll find some cool stuff here. I like experimenting with UI elements, animations, and building fun interactions."
				/>

				<div className="flex flex-col gap-8">
					<LabExperiment
						title="Example"
						description="This is an example of a component."
						preview={
							<div>
								<h3>Preview</h3>
								<p>this is a preview</p>
								<p>look how cool it is</p>
								<p>it's so cool</p>
								<br />
								<br />
								<p> so cool</p>
							</div>
						}
						code={""}
					/>
				</div>
			</div>
		</>
	);
};

export default Lab;

const LabExperiment = ({
	title,
	description,
	preview,
	code,
	usage,
}: {
	title: string;
	description: string;
	preview: React.ReactNode;
	code: string;
	usage?: string;
}) => {
	return (
		<>
			<div>
				<h3 className="text-lg font-semibold leading-none">{title}</h3>
				<p className="text-sm text-muted-foreground">{description}</p>
				<Tabs
					defaultValue="preview"
					className="aspect-[4/3] max-h-96 w-full rounded-lg border shadow bg-background dark:bg-neutral-900 mt-2 overflow-hidden"
				>
					<TabsList className="bg-card rounded-none rounded-t-lg w-full justify-start gap-2 px-2 h-12 relative z-50">
						<TabsTrigger value="preview">Preview</TabsTrigger>
						<TabsTrigger value="code">Code</TabsTrigger>
						{usage ? <TabsTrigger value="usage">Usage</TabsTrigger> : null}
					</TabsList>

					<>
						<TabsContent
							value="preview"
							className="grid place-content-center max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 w-full"
						>
							<div className="flex flex-col items-center justify-center w-full h-full">
								{preview}
							</div>
						</TabsContent>

						<TabsContent
							value="code"
							className="max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 overflow-auto px-2 w-full"
						>
							<CodePreview code={code} />
						</TabsContent>

						{usage ? (
							<TabsContent
								value="usage"
								className="max-h-[calc(100%-48px)] data-[state=active]:h-full m-0 overflow-auto px-2 w-full"
							>
								<CodePreview code={usage} />
							</TabsContent>
						) : null}
					</>
				</Tabs>
			</div>
		</>
	);
};
