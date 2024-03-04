import { Button } from "@/components/ui/button";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="overflow-hidden">
			<menu className="flex justify-end py-4">
				<Button asChild>
					<Link href={"/blog"}>Return to blog</Link>
				</Button>
			</menu>
			<section className="prose">{children}</section>
		</main>
	);
};

export default Layout;
