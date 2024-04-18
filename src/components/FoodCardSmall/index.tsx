"use client";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Link } from "@/navigation";
import supabase from "@/supabase";

import { Error } from "./types";

const FoodCardSmall = ({
	item: { id, name, type, content },
	translate: { edit, remove },
}: {
	item: { id: string; name: string; type: string | null; content: string };
	translate: { edit: string; remove: string };
}) => {
	const [error, setError] = useState<Error | undefined>();

	const handleRemove = async () => {
		const { error, status, data } = await supabase.from("food").delete().eq("id", id);

		if (status === 404) {
			setError({ message: "endpoint not found" });
		} else if (error != null) {
			setError(error);
		} else {
			console.log("log OK: ", data); // eslint-disable-line
		}
	};

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
			</Stack>
		</Stack>
	);
};

export default FoodCardSmall;
