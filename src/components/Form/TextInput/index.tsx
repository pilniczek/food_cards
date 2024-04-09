"use client";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { useController } from "react-hook-form";
import { Required } from "utility-types";

const TextInput = ({ name, ...rest }: Required<TextFieldProps, "name">): JSX.Element => {
	const { field, fieldState } = useController({
		name,
	});

	return (
		<TextField
			error={fieldState.error != null}
			helperText={fieldState.error?.message}
			{...field}
			{...rest}
		/>
	);
};

export default TextInput;
