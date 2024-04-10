"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button, { type ButtonProps } from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";

const BackButton = ({ children, ...rest }: ButtonProps): ReactNode => {
	const router = useRouter();
	return (
		<Button
			{...rest}
			variant="outlined"
			color="inherit"
			size="small"
			startIcon={<ArrowBackIosIcon />}
			onClick={() => router.back()}
		>
			{children != null ? children : "Back"}
		</Button>
	);
};

export default BackButton;
