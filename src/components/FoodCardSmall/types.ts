export * from "@/types/foodError";

import { FoodType } from "@/types/food";

export type FoodCardSmallProps = {
	item: FoodType;
	translate: { edit: string; remove: string };
};
