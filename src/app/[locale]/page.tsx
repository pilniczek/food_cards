import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import LoginGithub from "@/components/Form/LoginGithub";
import LoginGoogle from "@/components/Form/LoginGoogle";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const Home = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
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
