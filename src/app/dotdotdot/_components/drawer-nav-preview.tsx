import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { DrawerNavLayout } from "./drawer-nav-layout";

const DrawerNavPreview = () => {
	return (
		<>
			<Card className="bg-foreground aspect-square overflow-y-auto relative">
				<Link
					prefetch
					className="absolute z-50 bottom-3 right-4"
					href={"/dotdotdot/drawer-nav"}
					tabIndex={-1}
				>
					<Button
						tabIndex={-1}
						variant={"outline"}
						className="text-muted-foreground"
						name="cursor-preview"
					>
						Code
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>
				</Link>
				<DrawerNavLayout
					navBG="bg-foreground"
					links={[
						{
							title: "Navigation",
							sublinks: [
								{ title: "Home", href: "#" },
								{
									title: "About",
									href: "#",
								},
								{
									title: "Get Started",
									href: "#",
								},
							],
						},
						{
							title: "Resources",
							sublinks: [
								{ title: "Blog", href: "#" },
								{
									title: "Case Studies",
									href: "#",
								},
								{
									title: "Whitepapers",
									href: "#",
								},
							],
						},
						{
							title: "Company",
							sublinks: [
								{ title: "About", href: "#" },
								{
									title: "Careers",
									href: "#",
								},
								{
									title: "Contact",
									href: "#",
								},
							],
						},
						{
							title: "Legal",
							sublinks: [
								{ title: "Privacy", href: "#" },
								{
									title: "Terms",
									href: "#",
								},
								{
									title: "Cookies",
									href: "#",
								},
							],
						},
					]}
				>
					<div className="mx-auto max-w-2xl py-24">
						<div className="hidden sm:mb-8 sm:flex sm:justify-center">
							<div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 dark:ring-muted hover:ring-muted-foreground transition-all">
								Built with Framer Motion & TailwindCSS.{" "}
								<a href="#" className="font-semibold text-indigo-600">
									<span className="absolute inset-0" aria-hidden="true" />
									Read more <span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
						<div className="text-center">
							<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
								Drawer navigation menu
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								<span>Click the navigation menu</span> to see the drawer in
								action. Or just click the buttons below, they work too. I&apos;m
								running out of copy here so I&apos;m just going to keep typing
								until the text wraps nicely into a few lines. Almost there, just
								need to add a few more words. There we go.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="#"
									className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Get started
								</a>
								<a
									href="#"
									className="text-sm font-semibold leading-6 text-foreground"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</DrawerNavLayout>
			</Card>
		</>
	);
};

export default DrawerNavPreview;
