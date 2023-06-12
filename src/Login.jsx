import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input, Button } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";
import axios from 'axios';
import Modal from 'react-modal';

const loginURL = "http://localhost:8080/auth/login"

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");

	const [isSent, setIsSent] = useState(false);
	const emailPwRef = useRef(null);
	const pageRef = useRef(null);
	const buttonRef = useRef(null);

	const sendServerToLogin = () => {
		
		console.log(email, pw);
	}

	const loginButtonProcess = () => {
		sendServerToLogin();
		navigate('/result');
	}

	useEffect(() => {
		const chars = new SplitType(emailPwRef.current).chars;
		console.log(chars);
		if (chars) {
			gsap.fromTo(chars, {
				scale: 0,
				opacity: 0,
			}, {
				scale: 1,
				opacity: 1,
				stagger: 0.05,
				ease: 'back'
			})
		}

		if (pageRef.current.children) {	
			gsap.fromTo(pageRef.current.children, 
			{
				opacity: 0,
				y: 100,
			},
			{
				opacity: 1,
				y: 0,
				stagger: 0.15,
			}
			);
		}
		
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
			})
		}
	}, [])

	return (
		<div className="container">
			<div className="page" ref={pageRef}>
				<div className="eatToday" onClick={() => navigate("/")}>EatToday</div>
				<div className="loginTitleWrap" ref={emailPwRef}>
					이메일과 비밀번호를
					<br/>
					입력해주세요
				</div>
				<div>이메일을 입력해주세요</div>
				<Input placeholder="E-mail" value={email} onChange={(val) => setEmail(val.target.value)}/>
				<div>비밀번호를 입력해주세요</div>
				<Input placeholder="Password" type="password" value={pw} onChange={(val) => setPw(val.target.value)}/>
				<Button ref={buttonRef} onClick={() => {
					loginButtonProcess();
				}}>EatToday!</Button>
				<center>
					아직 회원이 아니신가요?&nbsp;
					<div className="textToRegisterPage" onClick={() => navigate("/register")}>회원가입</div>
				</center>
			</div>
		</div>
	)
}
