import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "@/navigation";
import supabase from "@/supabase";
import { type Data } from "@/types/createFood";

const useCreateFood = (): UseMutationResult<
	PostgrestSingleResponse<Data[]>,
	Error,
	Data,
	unknown
> => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationFn: async (formData: Data) => {
			return await supabase.from("food").insert(formData).select();
		},
		onSuccess: (data) => {
			if (data.status !== 404) {
				queryClient.invalidateQueries({ queryKey: ["foodList"] });
				router.back();
			} else {
				// TODO error
			}
		},
	});
};

export default useCreateFood;
