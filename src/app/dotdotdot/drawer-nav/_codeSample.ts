export const { sample } = {
	sample: `
	// THIS NAVBAR ACTS AS A WRAPPER COMPONENT FOR YOUR PAGES. PUT IT IN YOUR ROOT LAYOUT
	// ADD YOUR navBG COLOR TO THE LAYOUT COMPONENT AS A BACKGROUND COLOR.

	import React, { ReactNode, useState } from "react";
	import { AnimatePresence, motion } from "framer-motion";
	import { Menu, X, Zap } from "lucide-react";
	import { cn } from "@/lib/utils";

	type LinkType = {
		title: string;
		sublinks: { title: string; href: string }[];
	};

	export const DrawerNavLayout = ({
		children,
		links,
		navBG = "",
		navColor = "text-background",
		contentBG = "bg-background",
		contentColor = "text-foreground",
		noScale = false,
		noClickClose = false,
	}: {
		children?: ReactNode;
		links: LinkType[];
		navBG?: string;
		navColor?: string;
		contentBG?: string;
		contentColor?: string;
		noScale?: boolean;
		noClickClose?: boolean;
	}) => {
		const [open, setOpen] = useState(false);

		return (
			<>
				{/* Navbar Container */}
				<nav className={cn("p-4 px-6 z-50 w-full", navBG, navColor)}>
					<div className="flex items-start justify-between">
						<div className="flex items-start">
							<Zap size={32} />
						</div>

						<motion.button
							onClick={() => setOpen((pv) => !pv)}
							className="rounded-full p-1.5 inline-flex hover:bg-muted-foreground/50 transition-all"
						>
							<motion.span
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								key={open ? "close" : "open"}
							>
								{!open ? <Menu /> : <X />}
							</motion.span>
						</motion.button>
					</div>
					{/* DrawerNav Component */}
					<DrawerNav links={links} open={open} />
				</nav>
				{/* Main Content / Body */}

				<motion.main
					layout
					onClick={() => {
						if (open && !noClickClose) setOpen(false);
					}}
					className={cn(open && "select-none")}
				>
					<div
						className={cn(
							"rounded-t-[2rem] pt-4 px-6 h-24 min-h-svh transition-all duration-500",
							contentBG,
							contentColor,
							!noScale && open && "scale-95 origin-bottom brightness-75"
						)}
					>
						{children}
					</div>
				</motion.main>
			</>
		);
	};

	const DrawerNav = ({ links, open }: { links: LinkType[]; open: boolean }) => {
		return (
			<AnimatePresence mode="popLayout">
				{open && (
					<motion.div
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						className="grid sm:grid-cols-2 grid-cols-1 gap-6 py-6"
					>
						{links.map((l, i) => {
							return (
								<div
									key={l.title}
									className={cn(
										"space-y-1.5 md:group",
										i === links.length - 1 && i % 2 === 0 && "md:col-span-2"
									)}
								>
									<motion.span className="text-md block font-semibold text-background group-hover:tracking-wider transition-all">
										{l.title}
									</motion.span>
									{l.sublinks.map((sl) => (
										<a
											className="text-md block text-muted-foreground hover:text-accent sm:group"
											href={sl.href}
											key={sl.title}
										>
											<span className="group-hover:ml-2 transition-all">
												{sl.title}
											</span>
										</a>
									))}
								</div>
							);
						})}
					</motion.div>
				)}
			</AnimatePresence>
		);
};
`,
};
