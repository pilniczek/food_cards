import { object, string } from "yup";

export const ValidationUsername = () =>
	object().shape({
		username: string().required(),
	});
