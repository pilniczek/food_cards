import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import FormSetUsername from "@/components/Form/SetUsername";

const Home = (): ReactNode => {
	const translate = useTranslations();
	return (
		<main>
			<Typography variant="h1" component="h2">
				{translate("Global.title")}
			</Typography>
			<Box>
				<Typography component="h2" variant="h5">
					{translate("Index.description")}
				</Typography>
				<FormSetUsername translate={{ submit: translate("Global.submit") }} />
			</Box>
		</main>
	);
};

export default Home;
