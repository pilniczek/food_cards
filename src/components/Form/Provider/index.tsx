"use client";
import { type FormEvent, type ReactNode } from "react";
import { FormProvider as OriginalFormProvider, useForm } from "react-hook-form";

interface FormProviderProps {
	onSubmit: any; // TODO
	methodsParams: any; // TODO
	children: ReactNode;
}

const FormProvider = ({ children, methodsParams, onSubmit }: FormProviderProps) => {
	const methods = useForm(methodsParams);

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		methods.handleSubmit(onSubmit)();
	};

	return (
		<OriginalFormProvider {...methods}>
			<form onSubmit={handleFormSubmit} noValidate>
				{children}
			</form>
		</OriginalFormProvider>
	);
};

export default FormProvider;
