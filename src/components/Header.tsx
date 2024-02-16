import Image from "next/image";
import { Separator } from "./ui/separator";

const Header = () => {
	return (
		<div className="space-y-4">
			<div className="flex gap-4 items-center">
				<Image
					src={"/noah.jpeg"}
					alt="Noah Pittman"
					width={64}
					priority
					height={64}
					className="rounded-full object-cover"
				/>
				<div>
					<h1 className="text-lg leading-normal font-semibold">Noah Pittman</h1>
					<p className="text-muted-foreground leading-none font-medium">
						Full Stack Developer
						<br />
						<span className="text-sm font-medium">UI / UX Designer</span>
					</p>
				</div>
			</div>
			<Separator />
		</div>
	);
};

export default Header;
