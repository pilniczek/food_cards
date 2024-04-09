import * as yup from "yup";

export const ValidationUsername = yup.object().shape({
	username: yup.string().required(),
});
