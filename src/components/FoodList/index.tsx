"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FoodCardSmall from "@/components/FoodCardSmall";
import { useFoodList } from "@/query-hooks/useFoodList";

const FoodList = ({
	translate: { noFood, edit, remove },
}: {
	translate: { noFood: string; edit: string; remove: string };
}) => {
	const { data, isLoading, isError: isQueryError, error: queryError } = useFoodList();

	const {
		data: supabaseData,
		error: supabaseError,
		status: supabaseStatus,
	} = data ?? {
		data: [],
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

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
		<Stack spacing={2} sx={{ pb: 2 }}>
			{supabaseData != null &&
				supabaseData.map((item) => (
					<FoodCardSmall key={item.id} item={item} translate={{ edit, remove }} />
				))}
			{supabaseData.length === 0 && (
				<Typography variant="body1" component="p">
					{noFood}
				</Typography>
			)}
		</Stack>
	);
};

export default FoodList;
