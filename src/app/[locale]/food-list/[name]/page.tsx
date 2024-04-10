import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

import BackButton from "@/components/Button/Back";
import Header from "@/components/Layout/Header";

const Food = ({ params }: { params: { name: string } }): ReactNode => {
	const { name } = params;
	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{name}
				</Typography>
			</main>
		</>
	);
};

export default Food;
