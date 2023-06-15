import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from 'styled-components';
import { gsap } from "gsap";
import axios from 'axios';
import { Button } from "@mui/joy";

const loginURL = process.env.REACT_APP_API_URL + "auth/login";

export default function SelectPreferenceForm(){
	const navigate = useNavigate();
	const buttonRef = useRef(null);
	const [region, setRegion] = useState('');
	const [isSpicy, setIsSpicy] = useState('');
	const [ingredient, setIngredient] = useState('');
	const [isWarm, setIsWarm] = useState('');

	const SendPreferenceToServer = (region, isHot, ingredient, isWarm) => {
		useEffect(() => {
			axios.post(loginURL, {
				"preference1": JSON.stringify({region}),
				"preference2": JSON.stringify({isHot}),
				"preference3": JSON.stringify({ingredient}),
				"preference4": JSON.stringify({isWarm}),
			}).then((event) => {
				console.log('preference-received', event.data);
			}).catch((err) => {
				console.log(`an error occured: ${err}`);
				alert(`선호 항목 전송 실패🥺. ${err}`);
			});
		}, []);
	}

	useEffect(() => {
		if (buttonRef.current) {
			gsap.fromTo(buttonRef.current,
			{
				scale: 1,
			}, 
			{
				scale: 1.02,
				repeat: -1,
				yoyo: true,
				delay: 1,
			});
		}
	}, [])

	return (
		<>
			<RegionButtons>
				<Button sx={{ width: 109, margin: 1 }} variant={region === '한식' ? "solid" : "soft"} color={region === '한식' ? "success" : "primary"} onClick={() => {setRegion('한식');}}>한식</Button>
				<Button sx={{ width: 109, margin: 1 }} variant={region === '양식' ? "solid" : "soft"} color={region === '양식' ? "success" : "primary"} onClick={() => {setRegion('양식');}}>양식</Button>
				<Button sx={{ width: 109, margin: 1 }} variant={region === '중식' ? "solid" : "soft"} color={region === '중식' ? "success" : "primary"} onClick={() => {setRegion('중식');}}>중식</Button>
				<Button sx={{ width: 109, margin: 1 }} variant={region === '일식' ? "solid" : "soft"} color={region === '일식' ? "success" : "primary"} onClick={() => {setRegion('일식');}}>일식</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 234, margin: 1 }} variant={isSpicy === '매운 음식' ? "solid" : "soft"} color={isSpicy === '매운 음식' ? "success" : "primary"} onClick={() => {setIsSpicy('매운 음식');}}>매운 음식</Button>
				<Button sx={{ width: 234, margin: 1 }} variant={isSpicy === '안 매운 음식' ? "solid" : "soft"} color={isSpicy === '안 매운 음식' ? "success" : "primary"} onClick={() => {setIsSpicy('안 매운 음식');}}>안 매운 음식</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === '빵' ? "solid" : "soft"} color={ingredient === '빵' ? "success" : "primary"} onClick={() => {setIngredient('빵');}}>빵🥐</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === '밥' ? "solid" : "soft"} color={ingredient === '밥' ? "success" : "primary"} onClick={() => {setIngredient('밥');}}>밥🍙</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === '면' ? "solid" : "soft"} color={ingredient === '면' ? "success" : "primary"} onClick={() => {setIngredient('면');}}>면🍜</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === '차가운 음식' ? "solid" : "soft"} color={isWarm === '차가운 음식' ? "success" : "primary"} onClick={() => {setIsWarm('차가운 음식');}}>차가운 음식🍨</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === 'anything' ? "solid" : "soft"} color={isWarm === 'anything' ? "success" : "primary"} onClick={() => {setIsWarm('anything');}}>둘 다 좋아요!😊</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === '뜨거운 음식' ? "solid" : "soft"} color={isWarm === '뜨거운 음식' ? "success" : "primary"} onClick={() => {setIsWarm('뜨거운 음식');}}>뜨거운 음식🥧</Button>
			</RegionButtons>
			<Button sx={{ margin: 0.1 }} ref={buttonRef} disabled={!(Boolean(region) && Boolean(isSpicy) && Boolean(ingredient) && Boolean(isWarm))} onClick={() => {
				sendPreferenceToServer(region, isSpicy, ingredient, isWarm);
			}}>Eat Today!</Button>
		</>
	)
}

const RegionButtons = styled.div`
	*{
		flex-direction: row;
	}
`

