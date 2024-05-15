export const RouteHeading = ({
	heading,
	description,
}: {
	heading: string;
	description?: string;
}) => {
	return (
		<div className="space-y-2 sm:space-y-4 mb-16">
			<h3 className="text-3xl sm:text-4xl font-bold">{heading}</h3>
			<p className="text-sm">{description}</p>
		</div>
	);
};
