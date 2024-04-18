"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useLocale } from "next-intl";
import { type ReactNode } from "react";

import SubmitButton from "@/components/Form/SubmitButton";
import getURL from "@/utils/getUrl";
import signIn from "@/utils/signIn";

const LoginGoogle = ({ translate }: { translate: { submit: string } }): ReactNode => {
	const locale = useLocale();

	return (
		<SubmitButton variant="login" onClick={() => signIn(`${getURL()}${locale}/dashboard`, "google")}>
			<Box sx={{ pr: 2 }}>{translate.submit}</Box>
			<Image src="/images/google-logo.svg" alt={translate.submit} width="60" height="60" />
		</SubmitButton>
	);
};

export default LoginGoogle;
