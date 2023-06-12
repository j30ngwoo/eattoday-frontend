import React, { useState, useRef, useEffect } from "react"
import { useAsyncError, useNavigate } from "react-router-dom"
import { gsap } from "gsap";
import SplitType from "split-type";
import Modal from 'react-modal';
import RegisterForm from "components/RegisterForm";

export default function Register() {
	const navigate = useNavigate();
	const emailPwRef = useRef(null);
	const pageRef = useRef(null);

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
				stagger: 0.1,
			}
			);
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
        <RegisterForm />
			</div>
		</div>
	)
}
