import type { Metadata } from "next";
import { type ReactNode } from "react";

import MainLayout from "@/components/Layout/MainLayout";

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
	return <MainLayout params={{ locale }}>{children}</MainLayout>;
};

export default RootLayout;
