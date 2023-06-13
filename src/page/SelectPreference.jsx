

import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input, Button } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";
import axios from 'axios';
import Modal from 'react-modal';
import LoginForm from "components/LoginForm";

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
				<LoginForm />
			</div>
		</div>
	)
}
