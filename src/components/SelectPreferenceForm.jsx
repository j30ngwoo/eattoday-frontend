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
	const [isHovering, setIsHovering] = useState('');

	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

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
			<Button color="info"
				onClick={() => {sendPreferenceToServer();}}
				onMouseOver={() => {setIsHovering('a'); console.log({isHovering});}}
			>EatToday!</Button>
		</>
	)
}