import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import BackButton from "@/components/Button/Back";
import Header from "@/components/Layout/Header";

const DrawnFood = (): ReactNode => {
	const translate = useTranslations();
	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("DrawnFood.title")}
				</Typography>
			</main>
		</>
	);
};

export default DrawnFood;
