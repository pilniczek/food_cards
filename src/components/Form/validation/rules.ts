import { object, setLocale, string } from "yup";

import locale from "@/components/Form/validation/locale";

setLocale(locale.cs);

export const ValidationUsername = () =>
	object().shape({
		username: string().required(),
	});
