"use client";
import { yupResolver } from "@hookform/resolvers/yup";

import FormProvider from "@/components/Form/Provider";
import useCreateFood from "@/query-hooks/useCreateFood";
import { type FoodType } from "@/types/food";

import Form from "../";
import { validationFood } from "./validation";

const CreateFood = ({ translate }: { translate: { submit: string } }) => {
	const methodsParams = {
		defaultValues: {
			name: "",
			type: "",
			content: "",
		},
		resolver: yupResolver(validationFood()),
	};

	const {
		mutate,
		data,
		isError: isQueryError,
		error: queryError,
		isPending: isQueryPending,
	} = useCreateFood();

	const { error: supabaseError, status: supabaseStatus } = data ?? {};

	const handleCreate = (formData: FoodType) => {
		mutate(formData);
	};

	return (
		<FormProvider methodsParams={methodsParams} onSubmit={handleCreate}>
			<Form
				translate={translate}
				error={
					isQueryError
						? queryError?.message
						: supabaseError != null || supabaseStatus === 404
							? supabaseError?.message
							: undefined
				}
				isLoading={isQueryPending}
			/>
		</FormProvider>
	);
};

export default CreateFood;
