import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { getTranslations } from "next-intl/server";
import { type ReactNode } from "react";

import Footer from "@/components/Layout/Footer";
import { FormLocaleProvider } from "@/context/FormLocaleProvider";

import theme from "../../theme";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params: { locale } }: { params: { locale: "cs" } }) {
	const translation = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: translation("title"),
		description: translation("description"),
	};
}

const LocaleLayout = ({
	children,
	params,
}: Readonly<{
	children: ReactNode;
	params: { locale: "cs" };
}>): ReactNode => {
	const { locale } = params;
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<FormLocaleProvider locale={locale}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							{children}
							<Footer />
						</ThemeProvider>
					</FormLocaleProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
