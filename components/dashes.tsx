import { cn } from "@/lib/utils";

export const Dashes = ({ className }: { className?: string }) => {
	return (
		<div
			className={cn(
				"border-t border-dashed h-px w-full border-muted-foreground",
				className
			)}
		/>
	);
};
