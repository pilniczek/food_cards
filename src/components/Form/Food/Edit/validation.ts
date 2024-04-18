import { object, string } from "yup";

import { coreFood } from "../validation";

export const validationFood = () =>
	object().shape({
		id: string().required(),
		...coreFood,
	});
