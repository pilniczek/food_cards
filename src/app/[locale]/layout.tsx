import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { type ReactNode } from "react";

import Footer from "@/components/Layout/Footer";
import { ApiProvider } from "@/context/ApiProvider";
import { AuthProvider } from "@/context/AuthProvider";
import { FormLocaleProvider } from "@/context/FormLocaleProvider";
import { locales } from "@/navigation";
import { LocalesEnum } from "@/types/locale";

import theme from "../../theme";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
	params: { locale },
}: {
	params: { locale: LocalesEnum };
}) {
	const translation = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: translation("title"),
		description: translation("description"),
	};
}

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

const LocaleLayout = ({
	children,
	params,
}: Readonly<{
	children: ReactNode;
	params: { locale: LocalesEnum };
}>) => {
	const { locale } = params;
	unstable_setRequestLocale(locale);
	const translate = useTranslations("Auth");
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ApiProvider>
						<AuthProvider
							translate={{
								title: translate("title"),
								content: translate("content"),
								action: translate("action"),
							}}
						>
							<FormLocaleProvider locale={locale}>
								<ThemeProvider theme={theme}>
									<CssBaseline />
									{children}
									<Footer />
								</ThemeProvider>
							</FormLocaleProvider>
						</AuthProvider>
					</ApiProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

export default LocaleLayout;
