import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import BackButton from "@/components/Button/Back";
import FormSetUsername from "@/components/Form/SetUsername";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const Settings = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
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
					<FormSetUsername translate={{ submit: translate("Global.submit") }} />
				</Box>
			</main>
		</>
	);
};

export default Settings;
