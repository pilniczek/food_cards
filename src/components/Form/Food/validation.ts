import { array, object, string } from "yup";

export const coreFood = () => ({
	name: string().required(),
	type: string(),
	ingredients: array()
		.of(
			object({
				id: string().required(),
				name: string().required(),
			}),
		)
		.required(),
	content: string().required(),
});
