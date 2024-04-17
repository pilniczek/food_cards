"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
import { type FormEvent, type ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "@/components/Form/SubmitButton";
import TextInput from "@/components/Form/TextInput";

import { validationUsername } from "./validation";

const FormSetUsername = ({ translate }: { translate: { submit: string } }): ReactNode => {
	const methods = useForm({
		resolver: yupResolver(validationUsername()),
	});

	const onSubmit = () => console.log("log onSubmit NOW"); // eslint-disable-line

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(onSubmit)();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit}>
				<Stack spacing={4}>
					<Stack spacing={2}>
						<TextInput name="username" label="username" />
					</Stack>
					<Stack spacing={1}>
						<SubmitButton>{translate.submit}</SubmitButton>
					</Stack>
				</Stack>
			</form>
		</FormProvider>
	);
};

export default FormSetUsername;
