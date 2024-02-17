"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ClipboardEdit } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
			<AnimatePresence mode="popLayout">
				<motion.div
					layout
					initial={{ height: 256, color: "#aaa" }}
					animate={{
						height: showCode ? "auto" : 256,
						color: showCode ? "#fff" : "#aaa",
					}}
					className="overflow-hidden bg-[#111] border border-[#444]/20 rounded-md transition"
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
				</motion.div>
			</AnimatePresence>
			<div className="relative flex justify-center -top-[18px]">
				<Button
					className="border-input border-1 bg-white text-black hover:bg-[#eee] shadow"
					onClick={() => {
						if (showCode) {
							window.scroll({
								top: 0,
								behavior: "smooth",
							});
							setTimeout(() => {
								setShowCode(!showCode);
							}, 750);
						} else setShowCode(!showCode);
					}}
				>
					{!showCode ? "Show" : "Hide"}
				</Button>
			</div>
		</div>
	);
};
