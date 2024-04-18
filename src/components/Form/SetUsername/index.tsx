"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
import { type ReactNode } from "react";

import FormProvider from "@/components/Form/Provider";
import SubmitButton from "@/components/Form/SubmitButton";
import TextInput from "@/components/Form/TextInput";

import { validationUsername } from "./validation";

const FormSetUsername = ({ translate }: { translate: { submit: string } }): ReactNode => {
	const methodsParams = {
		resolver: yupResolver(validationUsername()),
	};

	const onSubmit = () => {
		console.log("log onSubmit NOW"); // eslint-disable-line
	};

	return (
		<FormProvider methodsParams={methodsParams} onSubmit={onSubmit}>
			<Stack spacing={4}>
				<Stack spacing={2}>
					<TextInput name="username" label="username" />
				</Stack>
				<Stack spacing={1}>
					<SubmitButton>{translate.submit}</SubmitButton>
				</Stack>
			</Stack>
		</FormProvider>
	);
};

export default FormSetUsername;
