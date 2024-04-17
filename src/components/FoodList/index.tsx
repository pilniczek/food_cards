"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useReducer } from "react";

import { Link } from "@/navigation";
import supabase from "@/supabase";

import { initialState, reducer } from "./reducer";

const FoodList = ({ translate: { noFood } }: { translate: { noFood: string } }) => {
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
		<Stack>
			{foodListError != null && (
				<Typography variant="body1" component="p">
					{foodListError.message}
				</Typography>
			)}
			{foodList != null &&
				foodList?.map((item) => (
					<Link href={`/all-food/food?name=${item.name}`} key={item.name}>
						{item.name}
					</Link>
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
