"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Check, Loader, Mail, X } from "lucide-react";

const PromiseButton = ({
	children,
	error,
}: {
	children: React.ReactNode;
	error?: boolean;
}) => {
	const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
		null
	);

	const successCase = () => {
		setStatus("loading");

		setTimeout(() => {
			setStatus("success");

			setTimeout(() => {
				setStatus(null);
			}, 1000);
		}, 1500);
	};

	const errorCase = () => {
		setStatus("loading");

		setTimeout(() => {
			setStatus("error");
			setTimeout(() => {
				setStatus(null);
			}, 1000);
		}, 1500);
	};

	return (
		<>
			<Button
				onClick={() => {
					!error ? successCase() : errorCase();
				}}
				type="submit"
				disabled={status === "loading"}
				variant={"outline"}
				id="newsletter-subscribe"
				className="border-border/50 shadow-sm items-center gap-2"
			>
				{children}
				<motion.span
					key={status === "loading" ? "loading" : status}
					initial={{
						opacity: 0,
						y: status === null ? 0 : 5,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
				>
					{status === null && <Mail size={16} />}

					{status === "loading" && (
						<Loader className="animate-spin" size={16} />
					)}

					{status === "success" && <Check size={16} />}
					{status === "error" && <X size={16} />}
				</motion.span>
			</Button>
		</>
	);
};

export default PromiseButton;
