import { useQuery } from "@tanstack/react-query";

import supabase from "@/supabase";

export const useIngredients = () => {
	return useQuery({
		queryKey: ["ingredients"],
		queryFn: async () => {
			return await supabase.from("ingredients").select("*");
		},
	});
};
