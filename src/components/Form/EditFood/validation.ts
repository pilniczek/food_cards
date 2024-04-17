import { object, string } from "yup";

export const validationFood = () =>
	object().shape({
		name: string().required(),
		type: string(),
		content: string().required(),
	});
