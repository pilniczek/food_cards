import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import Logout from "@/components/Button/LogOut";
import ActionCardLink from "@/components/Card/ActionCardLink";
import Header from "@/components/Layout/Header";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const Dashboard = ({ params: { locale } }: { params: { locale: LocalesEnum } }) => {
	unstable_setRequestLocale(locale);
	const translate = useTranslations("Dashboard");
	return (
		<>
			<Header>
				<Logout />
			</Header>
			<main>
				<Typography variant="h4" component="h1" textAlign="center">
					{translate("title")}
				</Typography>
				<Stack flexDirection="row" width="100%" justifyContent="center">
					<ActionCardLink
						route="/drawn-food"
						content={translate("functions.drawnFood.title")}
						media={{
							src: "/images/list.webp",
							alt: translate("functions.drawnFood.title"),
						}}
					/>
					<ActionCardLink
						route="/shopping-list"
						content={translate("functions.shoppingList.title")}
						media={{
							src: "/images/shopping.webp",
							alt: translate("functions.shoppingList.title"),
						}}
					/>
				</Stack>
				<Stack flexDirection="row" width="100%" justifyContent="center">
					<ActionCardLink
						route="/all-food"
						content={translate("functions.foodList.title")}
						media={{
							src: "/images/food.webp",
							alt: translate("functions.foodList.title"),
						}}
					/>
					<ActionCardLink
						route="/drawn-food"
						content={translate("functions.LetsDraw.title")}
						media={{
							src: "/images/wheel.webp",
							alt: translate("functions.LetsDraw.title"),
						}}
					/>
				</Stack>
			</main>
		</>
	);
};

export default Dashboard;
