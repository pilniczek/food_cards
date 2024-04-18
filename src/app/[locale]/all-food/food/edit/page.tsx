import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import BackButton from "@/components/Button/Back";
import EditFood from "@/components/Form/Food/Edit";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const Edit = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
	const translate = useTranslations();

	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("EditFood.title")}
				</Typography>
				<Suspense>
					<EditFood translate={{ submit: translate("Global.save") }} />
				</Suspense>
			</main>
		</>
	);
};

export default Edit;
