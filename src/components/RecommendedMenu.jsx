import { Card, CardOverflow, Typography, AspectRatio } from '@mui/joy';

export default function RecommendedMenu(props){
	return (
		<Card variant="outlined">
			<Typography level="h2">{props.data.name}</Typography>
			<Typography level="h2" fontSize="md">{props.data.explanation}</Typography>
		</Card>
	);
}