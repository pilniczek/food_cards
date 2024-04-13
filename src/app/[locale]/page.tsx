import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import LoginGithub from "@/components/Form/LoginGithub";
import LoginGoogle from "@/components/Form/LoginGoogle";
import Header from "@/components/Layout/Header";

const Home = (): ReactNode => {
	const translate = useTranslations();
	return (
		<>
			<Header />
			<Stack component="main" spacing={3}>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("Index.h1")}
				</Typography>

				<LoginGoogle translate={{ submit: translate("Global.submitGoogle") }} />
				<LoginGithub translate={{ submit: translate("Global.submitGithub") }} />
			</Stack>
		</>
	);
};

export default Home;
