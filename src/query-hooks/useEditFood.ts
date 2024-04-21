import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "@/navigation";
import supabase from "@/supabase";
import { type Data } from "@/types/editFood";

const useEditFood = (): UseMutationResult<
	PostgrestSingleResponse<Data[]>,
	Error,
	Data,
	unknown
> => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationFn: async (formData: Data) => {
			if (formData.id != undefined) {
				return await supabase.from("food").update(formData).eq("id", formData.id).select();
			} else {
				throw new Error("useEditFood: Food id is undefined.");
			}
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

export default useEditFood;
