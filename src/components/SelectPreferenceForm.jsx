import React, { useState, useRef, useEffect } from "react"
import { useAsyncError, useNavigate } from "react-router-dom"
import { styled } from 'styled-components';
import { gsap } from "gsap";
import axios from 'axios';
import { Input, Button } from "@mui/joy";


const loginURL = process.env.REACT_APP_API_URL + "auth/login";

export default function SelectPreferenceForm(){
	const navigate = useNavigate();
	const buttonRef = useRef(null);
	const buttonHoveringRef = useRef(null);
	const [region, setRegion] = useState('');
	const [isSpicy, setIsSpicy] = useState('');
	const [ingredient, setIngredient] = useState('');
	const [isWarm, setIsWarm] = useState('');

	const sendPreferenceToServer = (region, isHot, ingredient, isWarm) => {
		axios.post(loginURL, {
			
		}).then((event) => {
      console.log('preference-received', event);
			navigate("/result");
			//localStorage.setItem("id", event);
      // setLogin(true);
      // setNickname('jeongwoo');
      // navigate('/home');
    }).catch((err) => {
			console.log(`an error occured: ${err}`);
			alert(`선호 항목 전송 실패🥺. ${err}`);
		});
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
				<Button sx={{ width: 234, margin: 1 }} variant={isSpicy === 'spicy' ? "solid" : "soft"} color={isSpicy === 'spicy' ? "success" : "primary"} onClick={() => {setIsSpicy('spicy');}}>매운 음식</Button>
				<Button sx={{ width: 234, margin: 1 }} variant={isSpicy === 'notSpicy' ? "solid" : "soft"} color={isSpicy === 'notSpicy' ? "success" : "primary"} onClick={() => {setIsSpicy('notSpicy');}}>안 매운 음식</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === 'bread' ? "solid" : "soft"} color={ingredient === 'bread' ? "success" : "primary"} onClick={() => {setIngredient('bread');}}>빵🥐</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === 'rice' ? "solid" : "soft"} color={ingredient === 'rice' ? "success" : "primary"} onClick={() => {setIngredient('rice');}}>밥🍙</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={ingredient === 'noodle' ? "solid" : "soft"} color={ingredient === 'noodle' ? "success" : "primary"} onClick={() => {setIngredient('noodle');}}>면🍜</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === 'chilled' ? "solid" : "soft"} color={isWarm === 'chilled' ? "success" : "primary"} onClick={() => {setIsWarm('chilled');}}>차가운 음식🍨</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === 'anything' ? "solid" : "soft"} color={isWarm === 'anything' ? "success" : "primary"} onClick={() => {setIsWarm('anything');}}>둘 다 좋아요!😊</Button>
				<Button sx={{ width: 150, margin: 1 }} variant={isWarm === 'warm' ? "solid" : "soft"} color={isWarm === 'warm' ? "success" : "primary"} onClick={() => {setIsWarm('warm');}}>뜨거운 음식🥧</Button>
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
		margin-left: 30rem;
	}
`

