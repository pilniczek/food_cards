import Typography from "@mui/material/Typography";
import { type ReactNode } from "react";

const NotFound = (): ReactNode => {
	return (
		<html lang="cs">
			<body>
				<main>
					<Typography variant="h4" component="h1" textAlign="center">
						404
					</Typography>
				</main>
			</body>
		</html>
	);
};

export default NotFound;
