"use client";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Link } from "@/navigation";
import useRemoveFood from "@/query-hooks/useRemoveFood";

import { FoodCardSmallProps } from "./types";

const FoodCardSmall = ({
	item: { id, name, type, content },
	translate: { edit, remove },
}: FoodCardSmallProps) => {
	const {
		mutate,
		data,
		isSuccess: isQuerySuccess,
		isError: isQueryError,
		error: queryError,
		isPending: isQueryPending,
	} = useRemoveFood();

	const { error: supabaseError, status: supabaseStatus } = data ?? {};

	const handleRemove = () => {
		mutate({ id });
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
		<Stack
			flexDirection="row"
			flexWrap="nowrap"
			width="100%"
			justifyContent="space-between"
			sx={{ px: 2 }}
		>
			<Stack>
				<Typography variant="h6" component="h2">
					{name}
				</Typography>
				<Typography variant="body1" component="p">
					{content}
				</Typography>
			</Stack>
			<Stack flexDirection="row" alignItems="center">
				{isQueryPending || isQuerySuccess ? ( // isQuerySuccess fixes unexpected glimpse of buttons
					<CircularProgress />
				) : (
					<>
						<Link
							href={`/all-food/food/edit?id=${id}&name=${name}&type=${type}&content=${content}`}
							passHref
						>
							<Button variant="contained" size="small">
								{edit}
							</Button>
						</Link>
						<Button variant="outlined" color="inherit" size="small" onClick={handleRemove} sx={{ ml: 1 }}>
							{remove}
						</Button>
					</>
				)}
			</Stack>
		</Stack>
	);
};

export default FoodCardSmall;
