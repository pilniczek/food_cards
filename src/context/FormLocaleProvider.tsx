"use client";
import { createContext, type ReactElement, useContext } from "react";
import { setLocale } from "yup";

import formLocale from "@/components/Form/validation/locale";

export const FormLocaleContext = createContext({});

export const useFormLocale = () => {
	return useContext(FormLocaleContext);
};

interface FormLocaleProps {
	children: ReactElement;
	locale: "cs";
}

export const FormLocaleProvider = ({ children, locale }: FormLocaleProps) => {
	setLocale(formLocale[locale]);
	return <FormLocaleContext.Provider value={{}}>{children}</FormLocaleContext.Provider>;
};
