"use client";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { type FormEvent, type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "@/components/Form/SubmitButton";

const LoginGoogle = ({ translate }: { translate: { submit: string } }): ReactNode => {
	const methods = useForm();

	const onSubmit = () => console.log("log onSubmit NOW"); // eslint-disable-line
	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(onSubmit)();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit}>
				<Stack spacing={4} alignItems="center">
					<SubmitButton variant="login">
						<Box sx={{ pr: 2 }}>{translate.submit}</Box>
						<Image src="/images/google-logo.svg" alt={translate.submit} width="60" height="60" />
					</SubmitButton>
				</Stack>
			</form>
		</FormProvider>
	);
};

export default LoginGoogle;
