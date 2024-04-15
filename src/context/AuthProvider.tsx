"use client";
import { createContext, type ReactElement, useContext, useEffect, useState } from "react";

import DialogBottom from "@/components/DialogBottom";
import { usePathname, useRouter } from "@/navigation";
import getSession from "@/utils/getSession";

export const AuthContext = createContext({});

export const useAuth = () => {
	return useContext(AuthContext);
};

interface AuthProps {
	children: ReactElement;
	translate: {
		title: string;
		content: string;
		action: string;
	};
}

export const AuthProvider = ({ children, translate: { title, content, action } }: AuthProps) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		getSession().then((response) => {
			if (response == null && pathName !== "/") {
				setOpen(true);
			} else {
				setOpen(false);
			}
		});
	}, [pathName]);

	return (
		<AuthContext.Provider value={{}}>
			{children}
			<DialogBottom
				open={open}
				handleClose={(): void => {
					router.replace("/");
				}}
				title={title}
				actionTitle={action}
			>
				{content}
			</DialogBottom>
		</AuthContext.Provider>
	);
};
