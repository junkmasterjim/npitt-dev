import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ClipboardEdit } from "lucide-react";

export const CodePreview = ({ code }: { code: string }) => {
	const [showCode, setShowCode] = useState<boolean>(false);
	const [copying, setCopying] = useState<boolean>(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopying(true);
		setTimeout(() => {
			setCopying(false);
		}, 1500);
	};

	return (
		<div>
			<div
				className={cn(
					"overflow-hidden h-[256px] bg-[#111] text-[#aaa] border border-[#444]/20  rounded-md transition-all",
					showCode && "h-auto text-white"
				)}
			>
				<div className="flex flex-row-reverse h-0">
					<Button
						disabled={copying}
						className="relative top-3 right-5 bg-[#444] text-[#ccc] hover:bg-[#555] hover:text-[#fff] "
						size={"icon"}
						onClick={handleCopy}
					>
						{!copying ? (
							<ClipboardEdit className="h-5 w-5" />
						) : (
							<ClipboardCheck className="h-5 w-5" />
						)}
					</Button>
				</div>

				<pre className="overflow-auto overflow-y-hidden">
					<code className="text-xs p-8 font-mono">{code}</code>
				</pre>
			</div>
			<div className="relative flex justify-center -top-[18px]">
				<Button
					className="border-input border-1 bg-white text-black hover:bg-[#eee] shadow"
					onClick={() => {
						setShowCode(!showCode);
					}}
				>
					{!showCode ? "Show" : "Hide"}
				</Button>
			</div>
		</div>
	);
};
