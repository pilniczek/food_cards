"use client";
import Close from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

import useIsDesktop from "@/utils/isDesktop";

export interface DialogBottomProps extends DialogProps {
	handleClose: () => void;
	actionTitle: string;
}

const DialogBottom = ({
	children,
	handleClose,
	title,
	actionTitle,
	sx,
	...rest
}: DialogBottomProps) => {
	const theme = useTheme();
	const isDesktop = useIsDesktop();

	return (
		<Dialog
			fullScreen={!isDesktop}
			fullWidth
			sx={
				isDesktop
					? sx
					: {
							...sx,
							display: "flex",
							alignItems: "flex-end",
							".MuiDialog-container": {
								width: "100%",
								height: "100%",
								maxHeight: "350px",
							},
						}
			}
			onClose={handleClose}
			{...rest}
		>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
			>
				<DialogTitle>{title}</DialogTitle>
				<IconButton color="inherit" onClick={handleClose}>
					<Close />
				</IconButton>
			</Stack>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} autoFocus variant="contained">
					{actionTitle}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
export default DialogBottom;
