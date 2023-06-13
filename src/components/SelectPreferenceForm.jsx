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

	const sendPreferenceToServer = (email, pw) => {
		axios.post(loginURL, {
			"email": {email},
			"password": {pw}
		}).then((event) => {
      console.log('Login-received', event);
			//localStorage.setItem("id", event);
      // setLogin(true);
      // setNickname('jeongwoo');
      // navigate('/home');
    }).catch((err) => {
			console.log('an error occured', err);
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
				<Button color={region === '한식' ? "info" : "primary"} onClick={() => {setRegion('한식');}}>한식</Button>
				<Button color={region === '양식' ? "info" : "primary"} onClick={() => {setRegion('양식');}}>양식</Button>
				<Button color={region === '중식' ? "info" : "primary"} onClick={() => {setRegion('중식');}}>중식</Button>
				<Button color={region === '일식' ? "info" : "primary"} onClick={() => {setRegion('일식');}}>일식</Button>
			</RegionButtons>
		</>
	)
}

const RegionButtons = styled.div`
	*{
		flex-direction: row;
		margin-left: 10rem;
	}
`

