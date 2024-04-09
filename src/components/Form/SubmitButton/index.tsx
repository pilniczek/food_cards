import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { type ReactNode } from "react";

const SubmitButton = ({ children, ...rest }: LoadingButtonProps): ReactNode => {
	return (
		<LoadingButton {...rest} type="submit" variant="contained">
			{children}
		</LoadingButton>
	);
};

export default SubmitButton;
