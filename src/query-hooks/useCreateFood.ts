import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "@/navigation";
import supabase from "@/supabase";
import { type FoodType } from "@/types/food";
import removeIngredients from "@/utils/removeIngredients";

const useCreateFood = (): UseMutationResult<
	PostgrestSingleResponse<FoodType[]>,
	Error,
	FoodType,
	unknown
> => {
	const queryClient = useQueryClient();
	const router = useRouter();

	return useMutation({
		mutationFn: async (formData: FoodType) => {
			const noIngredientsFormData = removeIngredients(formData);
			return await supabase.from("food").insert(noIngredientsFormData).select();
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
