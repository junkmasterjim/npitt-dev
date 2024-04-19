"use client";

import { Cursor } from "@/app/dotdotdot/_components/Cursor";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CursorPreview = () => {
	const [spring, setSpring] = useState<boolean>(false);

	return (
		<Card>
			{/* Preview buttons */}
			<div className="flex justify-between h-0">
				<Button
					tabIndex={-1}
					className="relative z-50 top-3 left-4"
					name="cursor-type"
					onClick={() => setSpring(!spring)}
					variant={"ghost"}
				>
					<span
						className={cn(
							"mr-2 text-muted-foreground/50",
							!spring && "text-foreground"
						)}
					>
						Static
					</span>
					:
					<span
						className={cn(
							"ml-2 text-muted-foreground/50",
							spring && "text-foreground"
						)}
					>
						Spring
					</span>
				</Button>

				<Link
					prefetch
					className="relative top-3 right-4 z-50"
					href={"/dotdotdot/cursor"}
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
			</div>

			{/* Preview content */}

			<div className={cn("relative h-[400px] group", !spring && "cursor-none")}>
				{spring ? (
					<Cursor
						behaviour="spring"
						cursorSize={32}
						className="group-hover:block hidden"
					/>
				) : (
					<Cursor cursorSize={32} className="group-hover:block hidden" />
				)}
			</div>
		</Card>
	);
};

export default CursorPreview;
