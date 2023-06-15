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
	const [isHot, setIsHot] = useState('');
	const [ingredient, setIngredient] = useState('');
	const [isWarm, setIsWarm] = useState('');

	const sendPreferenceToServer = (region, isHot, ingredient, isWarm) => {
		axios.post(loginURL, {
			
		}).then((event) => {
      console.log('preference-received', event);
			//localStorage.setItem("id", event);
      // setLogin(true);
      // setNickname('jeongwoo');
      // navigate('/home');
    }).catch((err) => {
			console.log('an error occured', err);
			alert("선호 항목 전송 실패");
		});
	}

	useEffect(() => {
		if (buttonRef.current) {
			gsap.fromTo(buttonRef.current,
			{
				scale: 1,
			}, 
			{
				scale: 1.018,
				repeat: -1,
				yoyo: true,
				delay: 1,
			});
		}

		if (buttonHoveringRef.current) {
			gsap.fromTo(buttonHoveringRef.current,
			{
				scale: 1,
			}, 
			{
				scale: 2,
				delay: 1,
			});
		}
	}, [])

	return (
		<>
			<RegionButtons>
				<Button sx={{ width: 109, margin: 1 }} color={region === '한식' ? "info" : "primary"} onClick={() => {setRegion('한식');}}>한식</Button>
				<Button sx={{ width: 109, margin: 1 }} color={region === '양식' ? "info" : "primary"} onClick={() => {setRegion('양식');}}>양식</Button>
				<Button sx={{ width: 109, margin: 1 }} color={region === '중식' ? "info" : "primary"} onClick={() => {setRegion('중식');}}>중식</Button>
				<Button sx={{ width: 109, margin: 1 }} color={region === '일식' ? "info" : "primary"} onClick={() => {setRegion('일식');}}>일식</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 234, margin: 1 }} color={isHot === true ? "info" : "primary"} onClick={() => {setIsHot(true);}}>매운 음식</Button>
				<Button sx={{ width: 234, margin: 1 }} color={isHot === false ? "info" : "primary"} onClick={() => {setIsHot(false);}}>안 매운 음식</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} color={ingredient === 'bread' ? "info" : "primary"} onClick={() => {setIngredient('bread');}}>빵🥐</Button>
				<Button sx={{ width: 150, margin: 1 }} color={ingredient === 'rice' ? "info" : "primary"} onClick={() => {setIngredient('rice');}}>밥🍙</Button>
				<Button sx={{ width: 150, margin: 1 }} color={ingredient === 'noodle' ? "info" : "primary"} onClick={() => {setIngredient('noodle');}}>면🍜</Button>
			</RegionButtons>
			<RegionButtons>
				<Button sx={{ width: 150, margin: 1 }} color={isWarm === 'chilled' ? "info" : "primary"} onClick={() => {setIsWarm('chilled');}}>차가운 음식🍨</Button>
				<Button sx={{ width: 150, margin: 1 }} color={isWarm === 'anything' ? "info" : "primary"} onClick={() => {setIsWarm('anything');}}>둘 다 좋아요!😊</Button>
				<Button sx={{ width: 150, margin: 1 }} color={isWarm === 'warm' ? "info" : "primary"} onClick={() => {setIsWarm('warm');}}>뜨거운 음식🥧</Button>
			</RegionButtons>
			<Button sx={{ margin: 2 }} ref={buttonRef} onClick={() => {
				sendPreferenceToServer(region, isHot, ingredient, isWarm);
			}}>Eat Today!</Button>
		</>
	)
}

const RegionButtons = styled.div`
	*{
		fullWidth: true;
		flex-direction: row;
		margin-left: 30rem;
	}
`

