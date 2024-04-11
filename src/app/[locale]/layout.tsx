import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import Footer from "@/components/Layout/Footer";
import { FormLocaleProvider } from "@/context/FormLocaleProvider";

import theme from "../../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Food Cards",
	description: "Co bude dnes k večeři?",
};

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
