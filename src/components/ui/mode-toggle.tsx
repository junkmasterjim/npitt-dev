import { useTheme } from "next-themes";
import { SquareIcon } from "lucide-react";
import { motion } from "framer-motion";

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<motion.button
			whileTap={{ translateY: 2 }}
			className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring/0 disabled:pointer-events-none disabled:opacity-50 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-9 w-9"
			onClick={() => {
				if (theme == "light") setTheme("dark");
				else setTheme("light");
			}}
		>
			<SquareIcon className="w-5 h-5 fill-foreground" />
			<span className="sr-only">Toggle theme</span>
		</motion.button>
	);
}
