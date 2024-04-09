import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

const FoodList = (): ReactNode => {
	const translate = useTranslations();
	return (
		<main>
			<Typography variant="h1" component="h2">
				{translate("FoodList.title")}
			</Typography>
		</main>
	);
};

export default FoodList;
