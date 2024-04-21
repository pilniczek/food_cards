"use client";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

import SubmitButton from "@/components/Form/SubmitButton";
import TextInput from "@/components/Form/TextInput";

const EditFood = ({
	children,
	translate,
	error,
	isLoading,
}: {
	children?: ReactNode;
	translate: { submit: string };
	error: string | undefined;
	isLoading: boolean;
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
					{error}
				</Typography>
			)}
			<SubmitButton loading={isLoading}>{translate.submit}</SubmitButton>
		</>
	);
};

export default EditFood;
