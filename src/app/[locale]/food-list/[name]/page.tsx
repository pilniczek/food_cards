import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

const Food = ({ params }: { params: { name: string } }): ReactNode => {
	const { name } = params;
	return (
		<main>
			<Typography variant="h1" component="h2">
				{name}
			</Typography>
		</main>
	);
};

export default Food;
