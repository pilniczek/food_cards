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

export default theme;
