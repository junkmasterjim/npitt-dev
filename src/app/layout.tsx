import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Noah Pittman",
	description:
		"Noah Pittman's personal website. Full stack developer & UI/UX designer. Building beautiful web applications with Next.js, Tailwind CSS, and more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth" suppressHydrationWarning>
			<body className={(noto.className, "p-3 relative")}>
				<Background />
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark", "system"]}
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-2xl space-y-12 sm:space-y-20 mx-auto py-24 pt-12 px-1">
						{children}
					</main>
					<Navbar />
				</ThemeProvider>
			</body>
		</html>
	);
}

const Background = () => {
	return (
		<>
			<div className="fixed inset-0 -z-10 bg-gradient-to-t from-background from-25%  h-full w-full" />
			<div className="fixed inset-0 h-screen w-full -z-20 bg-[linear-gradient(to_right,#8080800a_2px,transparent_2px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:12px_16px] dark:opacity-75" />
		</>
	);
};
