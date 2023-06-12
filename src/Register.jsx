import React, { useState, useRef, useEffect } from "react"
import { useAsyncError, useNavigate } from "react-router-dom"
import { Input, Button } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";
import Modal from 'react-modal';

export default function Register() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [pwConfirm, setPwConfirm] = useState("");
	
	const [emailValidation, setEmailValidation] = useState(false);
	const [pwValidation, setPwValidation] = useState(false);
	const [pwConfirmValidation, setPwConfirmValidation] = useState(false);

	const [emailValidationMessage, setEmailValidationMessage] = useState(" ");
	const [pwValidationMessage, setPwValidationMessage] = useState(" ");
	const [pwConfirmValidationMessage, setPwConfirmValidationMessage] = useState(" ");

	const [isSent, setIsSent] = useState(false);
	const emailPwRef = useRef(null);
	const pageRef = useRef(null);
	const buttonRef = useRef(null);

	const sendServerToRegister = (email, pw) => {
		// 전송 할 것!
		// axios.send(id, pw);
		// https://eat-today.com/api/register
		// const url = ////,,,,
		// axios.post(url, {id, pw});
		// response => 받아
		// 그걸로 로그인 시켜주면됨!
		console.log('send to server: ', email, pw);
	}

	const registerButtonProcess = (email, pw) => {
		sendServerToRegister(email, pw);
	}

	const checkEmail = (email) => {
		const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}$/;
		if (regExp.test(email)) {
			setEmailValidation(true);
			setEmailValidationMessage(" ");
		} else {
			setEmailValidation(false);
			setEmailValidationMessage("올바른 이메일 주소를 입력해주세요.");
		}
	}

	const checkPw = (pw) => {
		const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
		console.log('pwTest=', regExp.test(pw)); //test
		if (regExp.test(pw)) {
			setPwValidation(true);
			setPwValidationMessage(" ");
		} else {
			setPwValidation(false);
			setPwValidationMessage("패스워드는 8자리 이상, 알파벳, 숫자를 포함하여야 합니다.");
		}
		if (pw === pwConfirm) {
			setPwConfirmValidation(true);
			setPwConfirmValidationMessage(" ");
		} else if (pwConfirm.length > 0) {
			setPwConfirmValidation(false);
			setPwConfirmValidationMessage("패스워드가 일치하지 않습니다.");
		}
	}

	const checkPwConfirm = (pwConfirm) => {
		if (pw === pwConfirm) {
			setPwConfirmValidation(true);
			setPwConfirmValidationMessage(" ");
		} else {
			setPwConfirmValidation(false);
			setPwConfirmValidationMessage("패스워드가 일치하지 않습니다.");
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
				<div className="registerTitleWrap" ref={emailPwRef}>
					회원가입👻
					<br/>
					환영합니다!
				</div>
				<div>이메일</div>
				<Input size="md" placeholder="E-mail" value={email} onChange={(val) => {
					const currentEmail = val.target.value;
					setEmail(currentEmail);
					checkEmail(currentEmail);
				}}/>
				<div className="registerValidationMessage">{emailValidationMessage}</div>
				<div>비밀번호</div>
				<Input size="md" placeholder="Password" type="password" value={pw} onChange={(val) => {
					const currentPw = val.target.value;
					setPw(currentPw);
					checkPw(currentPw);
				}}/>
				<div className="registerValidationMessage">{pwValidationMessage}</div>
				<div>비밀번호 확인!</div>
				<Input size="md" placeholder="Confirm Password" type="password" value={pwConfirm} onChange={(val) => {
					const currentPwConfirm = val.target.value;
					setPwConfirm(currentPwConfirm);
					checkPwConfirm(currentPwConfirm);
				}}/>
				<div className="registerValidationMessage">{pwConfirmValidationMessage}</div>
				<Button ref={buttonRef} onClick={() => {
					registerButtonProcess(email, pw);
				}}>Register</Button>
			</div>
		</div>
	)
}
