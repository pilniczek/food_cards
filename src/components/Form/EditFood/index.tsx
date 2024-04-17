"use client";
import { type FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "@/components/Form/SubmitButton";

const handleSave = () => {
	console.log("log save!: "); // eslint-disable-line
};

const EditFood = ({ translate }: { translate: { submit: string } }) => {
	const methods = useForm();

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(handleSave);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit}>
				<SubmitButton>{translate.submit}</SubmitButton>
			</form>
		</FormProvider>
	);
};

export default EditFood;
