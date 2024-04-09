"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
	return (
		<main>
			<Typography variant="h1" component="h2">
				Food Cards
			</Typography>
			<Box>
				<Typography component="h2" variant="h5">
					Změna uživatelského jména
				</Typography>
			</Box>
		</main>
	);
}
