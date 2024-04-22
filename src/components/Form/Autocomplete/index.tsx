"use client";
import MuiAutocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

type AutocompleteOption = {
	name: string;
	id: string;
};

export interface AutocompleteProps {
	label: string;
	name: string;
	isLoading: boolean;
	options: AutocompleteOption[];
	getOptionLabel: (option: AutocompleteOption) => string;
	isOptionEqualToValue: (option: AutocompleteOption, value: AutocompleteOption) => boolean;
}

const Autocomplete = ({ name, label, isLoading, getOptionLabel, ...rest }: AutocompleteProps) => {
	const { field, fieldState } = useController({
		name,
	});

	return (
		<MuiAutocomplete
			{...rest}
			{...field}
			onChange={(_, eventValue) => {
				field.onChange(eventValue);
			}}
			disablePortal
			//freeSolo
			filterSelectedOptions
			multiple
			getOptionLabel={getOptionLabel}
			id={name}
			renderTags={(value, getTagProps) =>
				value.map((option, index) => (
					<Chip
						variant="wide"
						label={option.name}
						{...getTagProps({ index })}
						key={getTagProps({ index }).key}
					/>
				))
			}
			renderInput={(params) => (
				<TextField
					error={fieldState.error != null}
					helperText={fieldState.error?.message}
					name={name}
					label={label}
					{...params}
					InputProps={{
						...params.InputProps,
						startAdornment: (
							<>
								{params.InputProps.startAdornment}
								{isLoading ? <CircularProgress /> : null}
							</>
						),
					}}
				/>
			)}
		/>
	);
};

export default Autocomplete;
