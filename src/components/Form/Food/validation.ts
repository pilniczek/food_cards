import { string } from "yup";

export const coreFood = () => ({
	name: string().required(),
	type: string(),
	content: string().required(),
});
