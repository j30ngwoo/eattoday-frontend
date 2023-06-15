import React, { useRef, useEffect } from "react"
import { gsap } from "gsap";
import SplitType from "split-type";
import SelectPreferenceForm from "components/SelectPreferenceForm";
import { styled } from 'styled-components';

export default function SelectPreference() {
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
				stagger: 0.15,
			}
			);
		}
	}, [])

	return (
		<div className="container">
			<Page ref={pageRef}>
				<div className="eatToday">EatToday</div>
				<div className="selectTitleWrap" ref={emailPwRef}>
					오늘의 선호를
					<br/>
					선택해주세요😋
				</div>
				<SelectPreferenceForm />
			</Page>
		</div>
	)
}

const Page = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	max-width: 500px;
	padding: 0 20px;
	background-color: #F7F7F7;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	gap: 1rem;
`