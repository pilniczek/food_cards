import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";

import { useRouter } from "@/navigation";
import supabase from "@/supabase";
import { type FoodType } from "@/types/food";
import removeIngredients from "@/utils/removeIngredients";

const useEditFood = (): UseMutationResult<
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
			if (noIngredientsFormData.id != undefined) {
				return await supabase
					.from("food")
					.update(noIngredientsFormData)
					.eq("id", noIngredientsFormData.id)
					.select();
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
