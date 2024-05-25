"use client";

// ! serif fonts
import { Newsreader } from "next/font/google";
import { Instrument_Serif } from "next/font/google";
import { EB_Garamond } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });
const eb = EB_Garamond({ subsets: ["latin"] });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400" });

// ! sans-serif fonts
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

const geist = GeistSans;
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// ! monospace fonts
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";

// ! remaining imports

import { toast } from "sonner";
import { NextFont } from "next/dist/compiled/@next/font";
import { cn } from "@/lib/utils";
import { RouteHeading } from "@/components/route-heading";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const geistMono = GeistMono;
const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const ibm = IBM_Plex_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const neutralColors = {
	colors: [
		"#F2F2F2",
		"#EAEAEA",
		"#D1D1D1",
		"#C4C4C4",
		"#BDBDBD",
		"#A0A0A0",
		"#8B8B8B",
		"#717171",
		"#595959",
		"#3F3F3F",
		"#2D2D2D",
	],
	classes: [
		"bg-neutral-50",
		"bg-neutral-100",
		"bg-neutral-200",
		"bg-neutral-300",
		"bg-neutral-400",
		"bg-neutral-500",
		"bg-neutral-600",
		"bg-neutral-700",
		"bg-neutral-800",
		"bg-neutral-900",
		"bg-neutral-950",
	],
};

const Styles = () => {
	return (
		<>
			<RouteHeading
				heading="Styles"
				description="Some of my favorite design styles & UI libraries. I keep a list of them here, mostly for my own reference."
			/>

			<div className="flex flex-col gap-12">
				<Section id="fonts">
					<SectionHeading>Fonts I use regularly</SectionHeading>
					<div className="flex flex-col gap-8">
						<FontMap />
					</div>
				</Section>

				<Section id="colors">
					<SectionHeading>Colors I use regularly</SectionHeading>
					<div className="flex flex-col gap-8">
						<section>
							<p>
								I'm a big fan of the{" "}
								<span className="bg-neutral-900 text-neutral-100 px-1 rounded">
									neutral
								</span>{" "}
								color palette in TailwindCSS.
							</p>
							<div className="flex flex-wrap gap-2 mt-2">
								{neutralColors.classes.map((color) => (
									<Tooltip key={color}>
										<TooltipTrigger asChild>
											<div
												className="cursor-pointer hover:opacity-80 transition-opacity shadow"
												onClick={() => {
													navigator.clipboard.writeText(color);
													toast.success("Copied to clipboard");
												}}
											>
												<div className={cn(color, "size-8 rounded")}></div>
											</div>
										</TooltipTrigger>
										<TooltipContent className="mt-2 text-center" side="bottom">
											<p>
												{
													neutralColors.colors[
														neutralColors.classes.indexOf(color)
													]
												}
											</p>
											<p>{color}</p>
										</TooltipContent>
									</Tooltip>
								))}
							</div>
						</section>
					</div>
				</Section>
			</div>
		</>
	);
};

export default Styles;

const FontMap = () => {
	const FONTS: Array<{
		serifType: "mono" | "sans" | "serif";
		font: NextFont;
		isVariable: boolean;
		weights?: number[];
		label: string;
	}> = [
		{
			serifType: "sans",
			font: geist,
			isVariable: true,
			label: "Geist",
		},
		{
			serifType: "sans",
			font: inter,
			isVariable: true,
			label: "Inter",
		},
		{
			serifType: "sans",
			font: poppins,
			isVariable: false,
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
			label: "Poppins",
		},

		{
			serifType: "serif",
			font: newsreader,
			isVariable: true,
			label: "Newsreader",
		},
		{
			serifType: "serif",
			font: eb,
			isVariable: true,
			label: "EB Garamond",
		},
		{
			serifType: "serif",
			font: instrument,
			isVariable: false,
			weights: [400],
			label: "Instrument Serif",
		},

		{
			serifType: "mono",
			font: geistMono,
			isVariable: true,
			label: "Geist Mono",
		},
		{
			serifType: "mono",
			font: jetbrains,
			isVariable: true,
			label: "JetBrains Mono",
		},
		{
			serifType: "mono",
			font: ibm,
			isVariable: false,
			weights: [100, 200, 300, 400, 500, 600, 700],
			label: "IBM Plex Mono",
		},
	];

	return (
		<>
			<div>
				<h3 className="text-3xl font-bold">Monospace</h3>
				<div className="flex gap-2 items-center flex-wrap">
					{FONTS.filter((font) => font.serifType === "mono").map((font) => (
						<Dialog key={font.label}>
							<DialogTrigger key={font.label} asChild>
								<Button
									variant={"link"}
									className="w-fit h-fit mr-4 mt-2 p-0 text-base"
								>
									<div>{font.label}</div>
								</Button>
							</DialogTrigger>
							<DialogContent className={cn(font.font.className)}>
								{/* // ! Heading */}
								<h4 className="text-3xl flex items-center gap-4">
									{font.label}{" "}
									{font.isVariable ? (
										<Badge variant={"default"}>Variable</Badge>
									) : null}
								</h4>
								{/* // ! Weights */}
								{!font.isVariable ? (
									<div className="flex items-center gap-2 flex-wrap">
										<p>Weights: </p>{" "}
										{font?.weights?.map((weight, i) => (
											<p style={{ fontWeight: weight }} key={weight}>
												{weight}
												{i === font?.weights?.length! - 1 ? "" : ", "}
											</p>
										))}
									</div>
								) : (
									<div className="flex items-center gap-1 text-sm flex-wrap">
										<p>Weights: </p>{" "}
										{[100, 200, 300, 400, 500, 600, 700, 800, 900].map(
											(weight, i) => (
												<p style={{ fontWeight: weight }} key={weight}>
													{weight}
													{i === 8 ? "" : ", "}
												</p>
											)
										)}
									</div>
								)}
								{/* // ! Body */}
								<div>
									<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
									<p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
								</div>
								<div>
									<p>{`~!@#$%^&*()-=+{}[]<>?`}</p>
									<p>0123456789</p>
								</div>
								<div>
									<p className="font-light">
										The quick brown fox jumps over the lazy dog.
									</p>
									<p>The quick brown fox jumps over the lazy dog.</p>
									<p className="font-bold">
										The quick brown fox jumps over the lazy dog.
									</p>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-3xl font-bold">Sans-serif</h3>
				<div className="flex gap-2 items-center flex-wrap">
					{FONTS.filter((font) => font.serifType === "sans").map((font) => (
						<Dialog key={font.label}>
							<DialogTrigger key={font.label} asChild>
								<Button
									variant={"link"}
									className="w-fit h-fit mr-4 mt-2 p-0 text-base"
								>
									<div>{font.label}</div>
								</Button>
							</DialogTrigger>
							<DialogContent className={cn(font.font.className)}>
								{/* // ! Heading */}
								<h4 className="text-3xl flex items-center gap-4">
									{font.label}{" "}
									{font.isVariable ? (
										<Badge variant={"default"}>Variable</Badge>
									) : null}
								</h4>
								{/* // ! Weights */}
								{!font.isVariable ? (
									<div className="flex items-center gap-2 flex-wrap">
										<p>Weights: </p>{" "}
										{font?.weights?.map((weight, i) => (
											<p style={{ fontWeight: weight }} key={weight}>
												{weight}
												{i === font?.weights?.length! - 1 ? "" : ", "}
											</p>
										))}
									</div>
								) : (
									<div className="flex items-center gap-1 text-sm flex-wrap">
										<p>Weights: </p>{" "}
										{[100, 200, 300, 400, 500, 600, 700, 800, 900].map(
											(weight, i) => (
												<p style={{ fontWeight: weight }} key={weight}>
													{weight}
													{i === 8 ? "" : ", "}
												</p>
											)
										)}
									</div>
								)}
								{/* // ! Body */}
								<div>
									<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
									<p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
								</div>
								<div>
									<p>{`~!@#$%^&*()-=+{}[]<>?`}</p>
									<p>0123456789</p>
								</div>
								<div>
									<p className="font-light">
										The quick brown fox jumps over the lazy dog.
									</p>
									<p>The quick brown fox jumps over the lazy dog.</p>
									<p className="font-bold">
										The quick brown fox jumps over the lazy dog.
									</p>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-3xl font-bold">Serif</h3>
				<div className="flex gap-2 items-center flex-wrap">
					{FONTS.filter((font) => font.serifType === "serif").map((font) => (
						<Dialog key={font.label}>
							<DialogTrigger key={font.label} asChild>
								<Button
									variant={"link"}
									className="w-fit h-fit mr-4 mt-2 p-0 text-base"
								>
									<div>{font.label}</div>
								</Button>
							</DialogTrigger>
							<DialogContent className={cn(font.font.className)}>
								{/* // ! Heading */}
								<h4 className="text-3xl flex items-center gap-4">
									{font.label}{" "}
									{font.isVariable ? (
										<Badge variant={"default"}>Variable</Badge>
									) : null}
								</h4>
								{/* // ! Weights */}
								{!font.isVariable ? (
									<div className="flex items-center gap-2 flex-wrap">
										<p>Weights: </p>{" "}
										{font?.weights?.map((weight, i) => (
											<p style={{ fontWeight: weight }} key={weight}>
												{weight}
												{i === font?.weights?.length! - 1 ? "" : ", "}
											</p>
										))}
									</div>
								) : (
									<div className="flex items-center gap-1 text-sm flex-wrap">
										<p>Weights: </p>{" "}
										{[100, 200, 300, 400, 500, 600, 700, 800, 900].map(
											(weight, i) => (
												<p style={{ fontWeight: weight }} key={weight}>
													{weight}
													{i === 8 ? "" : ", "}
												</p>
											)
										)}
									</div>
								)}
								{/* // ! Body */}
								<div>
									<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
									<p className="lowercase">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
								</div>
								<div>
									<p>{`~!@#$%^&*()-=+{}[]<>?`}</p>
									<p>0123456789</p>
								</div>
								<div>
									<p className="font-light">
										The quick brown fox jumps over the lazy dog.
									</p>
									<p>The quick brown fox jumps over the lazy dog.</p>
									<p className="font-bold">
										The quick brown fox jumps over the lazy dog.
									</p>
								</div>
							</DialogContent>
						</Dialog>
					))}
				</div>
			</div>
		</>
	);
};
