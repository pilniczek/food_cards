import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import BackButton from "@/components/Button/Back";
import FoodList from "@/components/FoodList";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { Link } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const AllFood = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
	const translate = useTranslations();
	return (
		<>
			<Header>
				<BackButton />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("AllFood.title")}
				</Typography>
				<FoodList
					translate={{
						noFood: translate("AllFood.noFood"),
						remove: translate("Global.remove"),
						edit: translate("Global.edit"),
					}}
				/>
				<Link href="/all-food/food/create" passHref>
					<Button variant="contained">create food</Button>
				</Link>
			</main>
		</>
	);
};

export default AllFood;
