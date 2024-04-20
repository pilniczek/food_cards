import { useQuery } from "@tanstack/react-query";

import supabase from "@/supabase";

export const useFoodList = () => {
	return useQuery({
		queryKey: ["foodList"],
		queryFn: async () => {
			return await supabase.from("food").select("*");
		},
	});
};
