"use client";
import Button, { type ButtonProps } from "@mui/material/Button";
import { type ReactNode } from "react";

import { useRouter } from "@/navigation";
import supabase from "@/supabase";

const LogOut = ({ children, ...rest }: ButtonProps): ReactNode => {
	const router = useRouter();
	return (
		<Button
			{...rest}
			variant="outlined"
			color="inherit"
			size="small"
			onClick={async () => {
				const { error } = await supabase.auth.signOut();
				router.push("/");
			}}
		>
			Logout
		</Button>
	);
};

export default LogOut;
