import { Button } from "@/components/ui/button";
import Link from "next/link";

export const PreviewHeader = ({
	title,
	created,
}: {
	title?: string;
	created?: string;
}) => {
	return (
		<header className="flex flex-col gap-4">
			<div className="justify-between flex items-center">
				<div>
					<h1 className="font-medium text-lg">{title}</h1>
					{created && (
						<p className="text-sm text-muted-foreground">{created}</p>
					)}
				</div>
				<Button asChild variant={"ghost"}>
					<Link href="/dotdotdot">{`Back to [. . .]`}</Link>
				</Button>
			</div>
		</header>
	);
};
