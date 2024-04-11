import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import Footer from "@/components/Layout/Footer";

import theme from "../theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "404",
	description: "Stránka nenalezena.",
};

const RootLayout = ({
	children,
	params: { locale },
}: Readonly<{
	children: ReactNode;
	params: { locale: "cs" };
}>): ReactNode => {
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
						<Footer />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
};

export default RootLayout;
