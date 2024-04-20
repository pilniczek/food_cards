import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import supabase from "@/supabase";

const useRemoveFood = (): UseMutationResult<
	PostgrestSingleResponse<{ id: string }>,
	Error,
	{ id: string },
	unknown
> => {
	const queryClient = useQueryClient();
	return useMutation<PostgrestSingleResponse<{ id: string }>, Error, { id: string }, unknown>({
		mutationFn: async ({ id }: { id: string }) => {
			const response = await supabase.from("food").delete().eq("id", id);
			return response as PostgrestSingleResponse<{ id: string }>;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["foodList"] });
		},
	});
};

export default useRemoveFood;
