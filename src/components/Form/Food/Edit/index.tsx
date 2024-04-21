"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";

import HiddenIdInput from "@/components/Form/HiddenIdInput";
import FormProvider from "@/components/Form/Provider";
import useEditFood from "@/query-hooks/useEditFood";
import { type Data } from "@/types/editFood";

import Form from "../";
import { validationFood } from "./validation";

const EditFood = ({ translate }: { translate: { submit: string } }) => {
	const searchParams = useSearchParams();

	const methodsParams = {
		defaultValues: {
			id: searchParams.get("id") ?? "",
			name: searchParams.get("name") ?? "",
			type: searchParams.get("type") ?? "",
			content: searchParams.get("content") ?? "",
		},
		resolver: yupResolver(validationFood()),
	};

	const {
		mutate,
		data,
		isError: isQueryError,
		error: queryError,
		isPending: isQueryPending,
	} = useEditFood();

	const { error: supabaseError, status: supabaseStatus } = data ?? {};

	const handleUpdate = (formData: Data) => {
		mutate(formData);
	};

	return (
		<FormProvider methodsParams={methodsParams} onSubmit={handleUpdate}>
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
			>
				<HiddenIdInput name="id" label="id" />
			</Form>
		</FormProvider>
	);
};

export default EditFood;
