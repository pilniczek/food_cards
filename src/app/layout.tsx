import { type ReactNode } from "react";

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>): ReactNode => {
	return children;
};

export default RootLayout;
