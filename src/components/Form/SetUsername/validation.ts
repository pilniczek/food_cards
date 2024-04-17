import { object, string } from "yup";

export const validationUsername = () =>
	object().shape({
		username: string().required(),
	});
