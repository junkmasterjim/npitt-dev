"use client";

import { Cursor } from "@/app/dotdotdot/_components/Cursor";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { sample } from "./_codeSample";

import { CodePreview } from "../_components/layout/CodePreview";
import { PreviewHeader } from "../_components/layout/PreviewHeader";

const Page = () => {
	const [cursor, setCursor] = useState<{
		size: number;
		stiffness: number;
		damping: number;
		mass: number;
		behaviour: "static" | "spring";
		variant: "circle" | "square";
		blur: "none" | "sm" | "md" | "lg";
	}>({
		size: 32,
		stiffness: 300,
		damping: 30,
		mass: 0.5,
		behaviour: "static",
		blur: "none",
		variant: "circle",
	});

	return (
		<>
			<PreviewHeader title="Custom Cursor" created="February 2024" />

			<main className="">
				{/* CARD WITH CURSOR CONTROLS */}
				<Card className="invert shadow-background/25 shadow-lg">
					<CardHeader>
						<CardTitle>Cursor Properties</CardTitle>
						<CardDescription>Customize the cursor.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex sm:flex-row flex-col gap-4 ">
							<div className="space-y-2 font-medium">
								<p>Behaviour</p>

								<Select
									onValueChange={(e) =>
										setCursor({
											...cursor,
											behaviour: e as "static" | "spring",
										})
									}
									value={cursor.behaviour}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a behaviour" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Behaviours</SelectLabel>
											<SelectItem value="static">Static</SelectItem>
											<SelectItem value="spring">Spring</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2 font-medium">
								<p>Variant</p>

								<Select
									onValueChange={(e) =>
										setCursor({
											...cursor,
											variant: e as "circle" | "square",
										})
									}
									value={cursor.variant}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a variant" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Variants</SelectLabel>
											<SelectItem value="circle">Circle</SelectItem>
											<SelectItem value="square">Square</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2 font-medium">
								<p>Blur?</p>

								<Select
									onValueChange={(e) =>
										setCursor({
											...cursor,
											blur: e as "none" | "sm" | "md" | "lg",
										})
									}
									value={cursor.blur}
								>
									<SelectTrigger className="w-[180px]">
										<SelectValue placeholder="Select a behaviour" />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Blur</SelectLabel>
											<SelectItem value="none">None</SelectItem>
											<SelectItem value="sm">Small</SelectItem>
											<SelectItem value="md">Medium</SelectItem>
											<SelectItem value="lg">Large</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div className="space-y-2 font-medium">
							<p>Cursor Size</p>
							<Slider
								className="invert dark:invert-0"
								min={20}
								max={256}
								step={4}
								value={[cursor.size]}
								onValueChange={(e) => setCursor({ ...cursor, size: e[0] })}
							/>
						</div>

						<div className="space-y-2 font-medium">
							<p>Stiffness</p>
							<Slider
								disabled={cursor.behaviour === "static"}
								className={cn(
									cursor.behaviour === "static" &&
										"opacity-50 cursor-not-allowed",
									"invert dark:invert-0"
								)}
								min={50}
								max={500}
								value={[cursor.stiffness]}
								onValueChange={(e) => setCursor({ ...cursor, stiffness: e[0] })}
							/>
						</div>

						<div className="space-y-2 font-medium">
							<p>Damping</p>
							<Slider
								disabled={cursor.behaviour === "static"}
								className={cn(
									cursor.behaviour === "static" &&
										"opacity-50 cursor-not-allowed",
									"invert dark:invert-0"
								)}
								min={5}
								max={100}
								value={[cursor.damping]}
								onValueChange={(e) => setCursor({ ...cursor, damping: e[0] })}
							/>
						</div>
						<div className="space-y-2 font-medium">
							<p>Mass</p>
							<Slider
								disabled={cursor.behaviour === "static"}
								className={cn(
									cursor.behaviour === "static" &&
										"opacity-50 cursor-not-allowed",
									"invert dark:invert-0"
								)}
								min={0.1}
								max={1}
								step={0.01}
								value={[cursor.mass]}
								onValueChange={(e) => setCursor({ ...cursor, mass: e[0] })}
							/>
						</div>
					</CardContent>
				</Card>

				{/* CURSOR RENDER */}
				<Cursor
					blur={cursor.blur}
					cursorSize={cursor.size}
					behaviour={cursor.behaviour}
					smoothOptions={{
						damping: cursor.damping,
						mass: cursor.mass,
						stiffness: cursor.stiffness,
					}}
					variant={cursor.variant}
				/>
			</main>

			{/* CODE SAMPLE */}
			<CodePreview code={sample} />
		</>
	);
};

export default Page;
