"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import SubmitButton from "@/components/Form/SubmitButton";
import TextInput from "@/components/Form/TextInput";

import { type Error } from "./types";

const EditFood = ({
	children,
	translate,
	error,
}: {
	children?: ReactNode;
	translate: { submit: string };
	error: Error;
}) => {
	return (
		<>
			<Stack spacing={4}>
				<TextInput name="name" label="name" />
				<TextInput name="type" label="type" />
				<TextInput name="content" label="content" />
				{children}
			</Stack>
			{error != null && (
				<Typography variant="body1" component="p">
					{error.message}
				</Typography>
			)}
			<SubmitButton>{translate.submit}</SubmitButton>
		</>
	);
};

export default EditFood;
