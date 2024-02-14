import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/Navbar";
import { Cursor } from "../components/ui/Cursor";

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
		<html lang="en" className="scroll-smooth">
			<body className={(noto.className, "p-3")}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark", "system"]}
					enableSystem
					disableTransitionOnChange
				>
					<main className="max-w-2xl space-y-20 mx-auto py-24 pt-12 px-1">
						{children}
					</main>
					<Navbar />
				</ThemeProvider>
				<Cursor />
			</body>
		</html>
	);
}
