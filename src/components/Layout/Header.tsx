import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => (
	<AppBar position="static">
		<Toolbar sx={{ justifyContent: "space-between" }}>
			<Typography component="p" variant="body1">
				Food cards
			</Typography>
			{children != null && <Box>{children}</Box>}
		</Toolbar>
	</AppBar>
);
export default Header;
