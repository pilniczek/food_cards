import type { Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
	title: "Food Cards",
	description: "Co bude dnes k večeři?",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>): ReactNode => {
	return children;
};

export default RootLayout;
