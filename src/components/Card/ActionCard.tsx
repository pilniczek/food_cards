import { CardActionArea } from "@mui/material";
import Card, { type CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image, { type ImageProps } from "next/image";
import { type MouseEventHandler, type ReactNode } from "react";

export type ActionCardProps = {
	card?: CardProps;
	content: ReactNode;
	media: ImageProps;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

const ActionCard = ({ card, content, media, onClick }: ActionCardProps) => {
	return (
		<Card sx={{ ...card?.sx, width: "100%", maxWidth: 200, m: 1 }}>
			<CardActionArea onClick={onClick}>
				<CardContent>
					<Typography gutterBottom variant="h6" component="h2">
						{content}
					</Typography>
				</CardContent>
				<Image {...media} alt={media.alt} width="200" height="150" style={{ objectFit: "cover" }} />
			</CardActionArea>
		</Card>
	);
};

export default ActionCard;
