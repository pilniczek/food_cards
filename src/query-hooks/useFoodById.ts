import { useQuery } from "@tanstack/react-query";

import supabase from "@/supabase";

export const useFoodById = (id: string) => {
	return useQuery({
		queryKey: [`foodById_${id}`],
		queryFn: async () => {
			// https://supabase.com/docs/guides/database/joins-and-nesting
			return await supabase
				.from("food")
				.select(
					`
						id,
						name,
						content,
						type,
						food_ingredients(
							ingredients(
								id,
								name
							)
						)
					`,
				)
				.eq("id", id)
				.then((response) => {
					const exactlyOneFood = response.data?.[0];
					return {
						...exactlyOneFood,
						food_ingredients: exactlyOneFood?.food_ingredients.map((item) => {
							return item.ingredients;
						}),
					};
				});
		},
	});
};
