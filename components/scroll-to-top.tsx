"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const handleScroll = () => {
		if (window.scrollY > 128) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Button
			onClick={scrollToTop}
			variant={"default"}
			className={cn(
				"fixed bottom-4 right-4 p-2 text-sm transition-opacity hover:opacity-75 duration-200 rounded-full size-8 sm:size-10",
				!isVisible ? "opacity-0 pointer-events-none" : "opacity-100"
			)}
		>
			<ArrowUp />
		</Button>
	);
};

export default ScrollToTop;
