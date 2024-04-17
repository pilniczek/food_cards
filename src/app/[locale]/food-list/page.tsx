import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import BackButton from "@/components/Button/Back";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const FoodList = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
	const translate = useTranslations("FoodList");
	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("title")}
				</Typography>
			</main>
		</>
	);
};

export default FoodList;
