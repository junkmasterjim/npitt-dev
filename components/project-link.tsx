import Image from "next/image";
import Link from "next/link";
import { Dashes } from "./dashes";

export const ProjectLink = ({
	link,
}: {
	link: { name: string; desc: string; href: string; src: string };
}) => {
	return (
		<Link
			target="_blank"
			key={link.name}
			href={link.href}
			className="flex gap-2 justify-between items-end group"
		>
			<div className="flex flex-col gap-1">
				<h4 className="whitespace-nowrap">{link.name}</h4>
				<p className="text-xs sm:text-sm text-muted-foreground sm:whitespace-nowrap line-clamp-2 w-full">
					{link.desc}
				</p>
			</div>

			<Dashes className="group-hover:border-foreground border-foreground/10 mb-1 shrink flex w-full max-w-1/2" />

			<div className="size-12 min-w-12  overflow-hidden rounded-xl shadow-md relative -top-2 self-center justify-self-center">
				<Image
					src={link.src}
					alt={link.name}
					width={128}
					height={128}
					className="object-cover w-full h-full bg-secondary"
				/>
			</div>
		</Link>
	);
};
