import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input, Button } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";
import Modal from 'react-modal';

export default function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [isSent, setIsSent] = useState(false);
	const emailPwRef = useRef(null);
	const pageRef = useRef(null);
	const buttonRef = useRef(null);

	const emailUnvalidateModal = () => {

	}

	const sendServerToLogin = (email, pw) => {
		// 전송 할 것!
		// axios.send(id, pw);
		// https://eat-today.com/api/login
		// const url = ////,,,,
		// axios.post(url, {id, pw});
		// response => 받아
		// 그걸로 로그인 시켜주면됨!
		console.log(email, pw);
	}

	const loginButtonProcess = (email, pw) => {
		if (checkEmail(email) && checkPW(pw)) {
			sendServerToLogin(email, pw);
			navigate('/result');
		}
	}

	const checkEmail = (email) => {
		const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}$/;
		console.log('emailTest=', regExp.test(email)); //test

		if (regExp.test(email)) {
			return (true);
		} else {
			emailUnvalidateModal();
		}
	}

	const checkPW = (pw) => {
		const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,10}$/;
		console.log('pwTest=', regExp.test(pw)); //test

		if (regExp.test(pw)) {
			return (true);
		} else {
			
		}
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
				stagger: 0.2,
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
					아이디와 비밀번호를
					<br/>
					입력해주세요
				</div>
				<div>아이디를 입력해주세요</div>
				<Input size="md" placeholder="E-mail" value={email} onChange={(val) => setEmail(val.target.value)}/>
				<div>비밀번호를 입력해주세요</div>
				<Input size="md" placeholder="Password" type="password" value={pw} onChange={(val) => setPw(val.target.value)}/>
				<Button ref={buttonRef} onClick={() => {
					loginButtonProcess(email, pw);
				}}>EatToday!</Button>
				<center>
					아직 회원이 아니신가요?&nbsp;
					<div className="textToRegisterPage" onClick={() => navigate("/register")}>회원가입</div>
				</center>
			</div>
		</div>
	)
}