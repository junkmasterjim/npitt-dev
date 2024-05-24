"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ClipboardEdit } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { toast } from "sonner";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const CodePreview = ({
	code,
	noCopy,
}: {
	code: string;
	noCopy?: boolean;
}) => {
	const [copying, setCopying] = useState<boolean>(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopying(true);
		setTimeout(() => {
			setCopying(false);
		}, 1500);
	};

	return (
		<div className="text-foreground overflow-hidden relative">
			{!noCopy && (
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							disabled={copying}
							className="absolute top-3 right-3"
							size={"icon"}
							variant={"outline"}
							onClick={() => {
								handleCopy();
								toast.success("Copied to clipboard");
							}}
						>
							{!copying ? (
								<ClipboardEdit className="size-5" />
							) : (
								<ClipboardCheck className="size-5" />
							)}
						</Button>
					</TooltipTrigger>
					<TooltipContent>Copy to clipboard</TooltipContent>
				</Tooltip>
			)}

			<pre className="overflow-auto h-full w-full min-h-full min-w-full">
				<code className={cn(jetbrains.className, "text-xs")}>{code}</code>
			</pre>
		</div>
	);
};
