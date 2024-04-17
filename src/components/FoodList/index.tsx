"use client";
import Stack from "@mui/material/Stack";
import { useEffect, useReducer } from "react";

import supabase from "@/supabase";

import { initialState, reducer } from "./reducer";

const FoodList = () => {
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
		<>
			{foodListError != null && <>{foodListError.message}</>}
			<Stack>
				{foodList != null && foodList.length > 0 ? foodList?.map((item) => item.name) : "no food"}
			</Stack>
		</>
	);
};

export default FoodList;
