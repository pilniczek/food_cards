import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import BackButton from "@/components/Button/Back";
import FormSetUsername from "@/components/Form/SetUsername";
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
				<Box>
					<Typography component="h2" variant="h5">
						{translate("Index.description")}
					</Typography>
					<FormSetUsername translate={{ submit: translate("Global.submit") }} />
				</Box>
			</main>
		</>
	);
};

export default Settings;
