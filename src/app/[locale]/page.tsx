import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { type ReactNode } from "react";

import Header from "@/components/Layout/Header";

const Home = (): ReactNode => {
	const translate = useTranslations("Index");
	return (
		<>
			<Header />
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("h1")}
				</Typography>
			</main>
		</>
	);
};

export default Home;
