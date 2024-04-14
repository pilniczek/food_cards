"use client";
import { createContext, type ReactElement, useContext, useEffect } from "react";

import { usePathname, useRouter } from "@/navigation";
import getSession from "@/utils/getSession";

export const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

interface AuthProps {
	children: ReactElement;
}

export const AuthProvider = ({ children }: AuthProps) => {
	const router = useRouter();
	const pathName = usePathname();

	useEffect(() => {
		getSession().then((response) => {
			if (response == null && pathName !== "/") {
				router.replace("/");
			}
		});
	});

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
