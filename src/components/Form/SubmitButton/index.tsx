import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { type ReactNode } from "react";

const SubmitButton = ({ children, ...rest }: LoadingButtonProps): ReactNode => {
	return (
		<LoadingButton variant="contained" {...rest} type="submit">
			{children}
		</LoadingButton>
	);
};

export default SubmitButton;
