import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import BackButton from "@/components/Button/Back";
import Header from "@/components/Layout/Header";

const Settings = (): ReactNode => {
	const translate = useTranslations();
	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("Settings.title")}
				</Typography>
			</main>
		</>
	);
};

export default Settings;
