"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FormEvent, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "@/components/Form/SubmitButton";
import TextInput from "@/components/Form/TextInput";
import { useRouter } from "@/navigation";
import supabase from "@/supabase";

import { type Data, type Error } from "./types";
import { validationFood } from "./validation";

const EditFood = ({ translate }: { translate: { submit: string } }) => {
	const methods = useForm({
		defaultValues: {
			name: "",
			type: "",
			content: "",
		},
		resolver: yupResolver(validationFood()),
	});
	const router = useRouter();

	const [error, setError] = useState<Error | undefined>();

	const handleSave = async (formData: Data) => {
		const { error, status } = await supabase.from("food").insert(formData).select();
		if (status === 404) {
			setError({ message: "endpoint not found" });
		} else if (error != null) {
			setError(error);
		} else {
			router.back();
		}
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(handleSave)();
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit}>
				<Stack spacing={4}>
					<TextInput name="name" label="name" />
					<TextInput name="type" label="type" />
					<TextInput name="content" label="content" />
				</Stack>
				{error != null && (
					<Typography variant="body1" component="p">
						{error.message}
					</Typography>
				)}
				<SubmitButton>{translate.submit}</SubmitButton>
			</form>
		</FormProvider>
	);
};

export default EditFood;
