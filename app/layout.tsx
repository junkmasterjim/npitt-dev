import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

import { GeistMono } from "geist/font/mono";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
	title: "Noah Pittman",
	description:
		"Noah Pittman is a full stack web developer & designer from eastern Canada.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn(GeistMono.className, "relative")}>
				<Background />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<TooltipProvider delayDuration={0}>
						<div className="container max-w-screen-sm px-2">
							<Navbar />
							{children}
						</div>
						<Toaster />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

const Background = () => {
	return (
		<>
			<div className="fixed inset-0 -z-10 bg-gradient-to-t from-background from-25% h-full w-full" />
			<div className="fixed inset-0 h-screen w-full -z-20 bg-[linear-gradient(to_right,#80808010_2px,transparent_2px),linear-gradient(to_bottom,#80808010_2px,transparent_2px)] bg-[size:24px_36px] dark:opacity-75" />
		</>
	);
};
