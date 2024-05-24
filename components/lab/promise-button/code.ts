export const PROMISE_BUTTON_CODE = `import { useState } from "react";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Check, Loader, Mail, X } from "lucide-react";

const PromiseButton = ({
	children,
	error, // HARD CODED FOR DEMONSTRATION PURPOSES
}: {
	children: React.ReactNode;
	error?: boolean; // HARD CODED FOR DEMONSTRATION PURPOSES
}) => {
	const [status, setStatus] = useState<"loading" | "success" | "error" | null>(
		null
	);

	// vvv HANDLE YOUR PROMISE HERE vvv

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

	// ^^^ END HANDLE PROMISE ^^^

	return (
		<>
			<Button
				onClick={() => {
					!error ? successCase() : errorCase(); // HANDLE YOUR PROMISE HERE
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

`;
