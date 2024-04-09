"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";
import { type FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";

import TextInput from "@/components/Form/TextInput";
import { ValidationUsername } from "@/components/Form/validation/rules";

const FormSetUsername = () => {
	const methods = useForm({
		resolver: yupResolver(ValidationUsername),
	});

	const onSubmit = () => console.log("log onSubmit NOW");

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(onSubmit)();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit}>
				<Stack spacing={4}>
					<Stack spacing={2}>
						<TextInput name="username" label={"form input label"} />
					</Stack>
					<Stack spacing={1}>
						<LoadingButton type="submit" variant="contained">
							<span>submit</span>
						</LoadingButton>
					</Stack>
				</Stack>
			</form>
		</FormProvider>
	);
};

export default FormSetUsername;
