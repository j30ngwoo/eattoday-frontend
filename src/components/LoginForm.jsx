import React, { useState, useRef, useEffect } from "react"
import { useAsyncError, useNavigate } from "react-router-dom"
import { styled } from 'styled-components';
import { gsap } from "gsap";
import axios from 'axios';
import { Input, Button } from "@mui/joy";


const loginURL = "http://localhost:8080/" + "auth/login";

export default function LoginForm(){
	const navigate = useNavigate();
	const buttonRef = useRef(null);

	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const sendServerToLogin = (email, pw) => {
		axios.post(loginURL, {
			"email": JSON.stringify({email}),
			"password": JSON.stringify({pw})
		}).then((event) => {
      console.log('Login-received', event.data.accessToken);
			localStorage.setItem("accessToken", event.data.accessToken);
			localStorage.setItem("email", email);
			navigate("/select");
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
	}, [])

	return (
		<>
			<div>이메일을 입력해주세요</div>
			<Input placeholder="E-mail" value={email} onChange={(val) => setEmail(val.target.value)}/>
			<div>비밀번호를 입력해주세요</div>
			<Input placeholder="Password" type="password" value={pw} onChange={(val) => setPw(val.target.value)}/>
			<Button ref={buttonRef} onClick={() => {
				sendServerToLogin(email, pw);
			}}>Login!</Button>
			<center>
				아직 회원이 아니신가요?&nbsp;
				<div className="textToRegisterPage" onClick={() => navigate("/register")}>회원가입</div>
			</center>
			<Button onClick={() => localStorage.setItem('accessToken', 'a')} />
			<Button onClick={() => localStorage.removeItem('accessToken')} />
		</>
	)
}