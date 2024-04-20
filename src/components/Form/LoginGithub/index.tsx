"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import { useLocale } from "next-intl";
import { type ReactNode } from "react";

import SubmitButton from "@/components/Form/SubmitButton";
import useSignIn from "@/query-hooks/useSignIn";
import getURL from "@/utils/getUrl";

const LoginGithub = ({ translate }: { translate: { submit: string } }): ReactNode => {
	const locale = useLocale();
	const { mutate } = useSignIn();

	const onSignIn = () => {
		mutate(
			{ url: `${getURL()}${locale}/dashboard`, provider: "github" }, // TODO error
		);
	};
	return (
		<SubmitButton variant="login" onClick={onSignIn}>
			<Box sx={{ pr: 2 }}>{translate.submit}</Box>
			<Image
				src="/images/github-logo.webp"
				alt={translate.submit}
				width="60"
				height="60"
				style={{ objectFit: "contain" }}
			/>
		</SubmitButton>
	);
};

export default LoginGithub;
