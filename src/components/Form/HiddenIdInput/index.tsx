"use client";
import { type TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";
import { useController } from "react-hook-form";
import { Required } from "utility-types";

const HiddenIdInput = ({ name }: Required<TextFieldProps, "name">): ReactNode => {
	const { fieldState } = useController({
		name,
	});
	if (fieldState.error != null) {
		return (
			<Typography variant="body1" component="p">
				missing id
			</Typography>
		);
	} else {
		return null;
	}
};

export default HiddenIdInput;
