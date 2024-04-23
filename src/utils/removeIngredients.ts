import { FoodType } from "@/types/food";

const removeIngredients = (food: FoodType) =>
	Object.keys(food)
		.filter((objKey) => objKey !== "ingredients")
		.reduce((newObj: FoodType, key) => {
			newObj[key as keyof typeof food] = food[key as keyof typeof food];
			return newObj;
		}, {} as FoodType);

export default removeIngredients;
