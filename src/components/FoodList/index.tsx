"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useReducer } from "react";

import FoodCardSmall from "@/components/FoodCardSmall";
import supabase from "@/supabase";

import { initialState, reducer } from "./reducer";

const FoodList = ({
	translate: { noFood, edit, remove },
}: {
	translate: { noFood: string; edit: string; remove: string };
}) => {
	const [{ foodList, foodListError }, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchFoodList = async () => {
			const { data, error } = await supabase.from("food").select("*");
			if (error != null) {
				dispatch({
					type: "SET_ERROR",
					error,
				});
			} else {
				dispatch({
					type: "SET_DATA",
					data,
				});
			}
		};
		fetchFoodList();
	}, []);

	return (
		<Stack spacing={2} sx={{ pb: 2 }}>
			{foodListError != null && (
				<Typography variant="body1" component="p">
					{foodListError.message}
				</Typography>
			)}
			{foodList != null &&
				foodList?.map((item) => (
					<FoodCardSmall key={item.id} item={item} translate={{ edit, remove }} />
				))}
			{foodList?.length === 0 && (
				<Typography variant="body1" component="p">
					{noFood}
				</Typography>
			)}
		</Stack>
	);
};

export default FoodList;
