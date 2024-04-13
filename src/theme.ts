"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
});

theme!.components!.MuiCardActionArea = {
	styleOverrides: {
		root: {
			fontSize: 0,
			height: "100%",
			justifyContent: "space-between",
			display: "flex",
			flexDirection: "column",
		},
	},
};

theme!.components!.MuiAppBar = {
	styleOverrides: {
		root: { marginBottom: theme.spacing(3) },
	},
};

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		login: true;
	}
}

theme!.components!.MuiButton = {
	variants: [
		{
			props: { variant: "login" },
			style: {
				textAlign: "left",
				textTransform: "unset",
				border: `1px solid ${theme.palette.grey[300]}`,
			},
		},
	],
};

export default theme;
