import { Card, CardOverflow, Typography, AspectRatio } from '@mui/joy';

function SomeExample(props){
	if (props.name === "시홍쓰"){
		return (
			<CardOverflow>
				<AspectRatio ratio="2">
					<img
						src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20201230_249%2F1609305244229oMcmW_JPEG%2Fu8YvvJEtaPZQVtbZp8sU_qdD.jpeg.jpg"
						loading="lazy"
						alt=""
					/>
				</AspectRatio>
			</CardOverflow>
	)} else if (props.name === "포크포크"){
		return (
			<CardOverflow>
				<AspectRatio ratio="2">
					<img
						src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220104_238%2F16412679204789zi17_JPEG%2F%25B5%25B7%25BA%25F1%25BA%25F6%25B3%25C3%25B8%25E9.jpg"
						loading="lazy"
						alt=""
					/>
				</AspectRatio>
			</CardOverflow>
	)};
}

export default function RecommendedMenu(props){
	return (
		<Card variant="outlined">
			<SomeExample name={props.data.name}/>
			<Typography level="h2">{props.data.name}</Typography>
			<Typography level="h2" fontSize="md">{props.data.explanation}</Typography>
		</Card>
	);
}