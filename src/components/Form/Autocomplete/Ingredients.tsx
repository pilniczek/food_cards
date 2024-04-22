"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useIngredients } from "@/query-hooks/useIngredients";
import { IngredientsType } from "@/types/ingredients";

import Autocomplete, { type AutocompleteProps } from "./";

const AutocompleteIngredients = ({
	name,
	...rest
}: Omit<
	AutocompleteProps,
	"options" | "isLoading" | "getOptionLabel" | "isOptionEqualToValue"
>) => {
	const { data, isLoading, isError: isQueryError, error: queryError } = useIngredients();

	const {
		data: supabaseData,
		error: supabaseError,
		status: supabaseStatus,
	} = data ?? {
		data: [],
	};

	if (isQueryError) {
		return (
			<Stack spacing={2} sx={{ pb: 2 }}>
				<Typography variant="body1" component="p">
					{queryError?.message}
				</Typography>
			</Stack>
		);
	}

	if (supabaseError != null || supabaseStatus === 404) {
		return (
			<Stack spacing={2} sx={{ pb: 2 }}>
				<Typography variant="body1" component="p">
					{supabaseError?.message}
				</Typography>
			</Stack>
		);
	}

	return (
		<Autocomplete
			{...rest}
			name={name}
			options={supabaseData}
			isLoading={isLoading}
			getOptionLabel={(option: IngredientsType) => option.name}
			isOptionEqualToValue={(option: IngredientsType, value: IngredientsType) => {
				return option.id === value.id;
			}}
		/>
	);
};

export default AutocompleteIngredients;
