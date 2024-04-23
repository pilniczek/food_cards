"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSearchParams } from "next/navigation";

import HiddenIdInput from "@/components/Form/HiddenIdInput";
import FormProvider from "@/components/Form/Provider";
import useEditFood from "@/query-hooks/useEditFood";
import { useFoodById } from "@/query-hooks/useFoodById";
import { type FoodType } from "@/types/food";

import Form from "../";
import { validationFood } from "./validation";

const EditFood = ({ translate }: { translate: { submit: string } }) => {
	const searchParams = useSearchParams();

	const {
		data: defaultData,
		isError: isDefaultQueryError,
		error: defaultQueryError,
		isPending: isDefaultQueryPending,
	} = useFoodById(searchParams.get("id") ?? "");

	const {
		mutate,
		data,
		isError: isQueryError,
		error: queryError,
		isPending: isQueryPending,
	} = useEditFood();

	const { error: supabaseError, status: supabaseStatus } = data ?? {};

	const handleUpdate = (formData: FoodType) => {
		mutate(formData);
	};

	if (isDefaultQueryError) {
		return (
			<Stack spacing={2} sx={{ pb: 2 }}>
				<Typography variant="body1" component="p">
					{defaultQueryError?.message}
				</Typography>
			</Stack>
		);
	}

	if (isDefaultQueryPending) {
		return (
			<Stack alignItems="center">
				<CircularProgress />
			</Stack>
		);
	}

	const methodsParams = {
		defaultValues: {
			id: defaultData.id,
			name: defaultData.name,
			content: defaultData.content,
			ingredients: defaultData.food_ingredients,
		},
		resolver: yupResolver(validationFood()),
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
