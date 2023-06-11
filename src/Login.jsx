import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Input, Button } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";


export default function Login() {
	const navigate = useNavigate();
	const [id, setId] = useState("");
	const [pw, setPw] = useState("");
	const [isSent, setIsSent] = useState(false);
	const idPwRef = useRef(null);
	const pageRef = useRef(null);
	const buttonRef = useRef(null);

	const sendServerToLogin = (id, pw) => {
		// 전송 할 것!
		// axios.send(id, pw);
		// https://eat-today.com/api/login
		// const url = ////,,,,
		// axios.post(url, {id, pw});
		// response => 받아
		// 그걸로 로그인 시켜주면됨!
		console.log(id, pw);
	}

	useEffect(() => {
		const chars = new SplitType(idPwRef.current).chars;
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
				scale: 1.05,
				repeat: -1,
				yoyo: true,
				delay: 1,
			})

		gsap.fromTo('.clickMe', 
			{
				scale: 1,
			}, 
			{
				scale: 1.2,
				repeat: -1,
				yoyo: true,
				delay: 1.2,
			})
		}
	}, [])

	return (
		<div className="container">
			<div className="page" ref={pageRef}>
				<div className="titleWrap" ref={idPwRef}>
					아이디와 비밀번호를
					<br/>
					입력해주세요
				</div>
				<div>아이디를 입력해주세요~</div>
				<Input size="md" placehoder="ID" value={id} onChange={(val) => setId(val.target.value)}/>
				<div>비밀번호를 입력해주세요~</div>
				<Input size="md" placehoder="PW" type="password" value={pw} onChange={(val) => setPw(val.target.value)}/>
				<Button ref={buttonRef} onClick={() => {
					// API 요청을 하는거지~ id랑 비밀번호 서버한테 보내고 응답 받기~!
					sendServerToLogin(id, pw);
				}}>가짜 전송~</Button>
				<p className="clickMe">👆~이건 누르지마~👆</p>
				<Button ref={buttonRef} onClick={() => navigate('/result')}>전송~</Button>
				<p className="clickMe">👆~눌러줘~👆</p>
			</div>
		</div>
	)
}