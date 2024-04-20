"use client";
import { createContext, type ReactElement, useContext, useEffect, useState } from "react";

import DialogBottom from "@/components/DialogBottom";
import { usePathname, useRouter } from "@/navigation";
import { useSession } from "@/query-hooks/useSession";

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

	const { data, isLoading } = useSession(); // TODO error

	useEffect(() => {
		if (data == null && pathName !== "/" && isLoading === false) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [data, isLoading, pathName]);

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
