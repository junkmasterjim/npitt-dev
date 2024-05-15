import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
	return (
		<>
			<div className="h-svh flex flex-col  items-center justify-center -mt-24">
				<h1 className="text-4xl font-bold">404</h1>
				<p>Page not found</p>

				<Link href="/" className="mt-8">
					<Button>Go to home</Button>
				</Link>
			</div>
		</>
	);
};

export default NotFound;
