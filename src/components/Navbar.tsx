"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<nav className="fixed inset-x-0 bottom-4 w-full px-2">
			<motion.div
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="bg-secondary shadow-sm relative mx-auto justify-evenly items-center  max-w-xs p-2 rounded-full px-6 border border-border/50"
			>
				<div className="flex items-center gap-2 mx-auto w-fit">
					<Button
						asChild
						variant={"ghost"}
						className={cn(
							pathname === "/" && "bg-accent/75 hover:bg-accent/75"
						)}
					>
						<Link prefetch href={"/"}>
							Home
						</Link>
					</Button>
					<Button
						// asChild
						disabled
						variant={"ghost"}
						className={cn(
							pathname === "/dotdotdot" && "bg-accent/75 hover:bg-accent/75"
						)}
					>
						<Link href={"/dotdotdot"}>{`[ . . . ]`}</Link>
					</Button>
					{/* <Button
						disabled
						variant={"ghost"}
						className={cn(
							pathname === "dotdotdot" && "bg-accent/75 hover:bg-accent/75"
						)}
					>
						More
					</Button> */}

					<ModeToggle />
				</div>
			</motion.div>
		</nav>
	);
};

export default Navbar;
