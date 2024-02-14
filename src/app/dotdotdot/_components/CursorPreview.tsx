"use client";

import { Cursor } from "@/components/ui/Cursor";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CursorPreview = () => {
	const [spring, setSpring] = useState<boolean>(false);

	return (
		<div className="border-border/10 dark:border-border/50 border rounded-lg bg-card/75 dark:shadow-card/25 shadow-sm">
			{/* Preview buttons */}
			<div className="flex justify-between h-0">
				<Button
					className="relative z-50 top-3 left-4"
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
				>
					<Button variant={"ghost"} size={"icon"}>
						<ArrowRight className="h-5 w-5" />
					</Button>
				</Link>
			</div>

			{/* Preview content */}

			<div className={cn("relative h-[400px] group", !spring && "cursor-none")}>
				{spring ? (
					<Cursor
						variant="spring"
						cursorSize={32}
						className="group-hover:block hidden"
					/>
				) : (
					<Cursor cursorSize={32} className="group-hover:block hidden" />
				)}
			</div>
		</div>
	);
};

export default CursorPreview;
