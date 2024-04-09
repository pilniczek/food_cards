import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

const DrawnFood = (): ReactNode => {
	const translate = useTranslations();
	return (
		<main>
			<Typography variant="h1" component="h2">
				{translate("DrawnFood.title")}
			</Typography>
		</main>
	);
};

export default DrawnFood;
