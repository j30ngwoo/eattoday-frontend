import { useState } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { Input, Button } from "@mui/joy";
import { checkEmail, checkPw, checkPwConfirm } from '../utils/validation';

const signupURL = "http://localhost:8080/" + "auth/signup";

export default function RegisterForm(){
  const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [pw, setPw] = useState("");
	const [pwConfirm, setPwConfirm] = useState("");
	
	const [isEmailValidate, setIsEmailValidate] = useState(true);
	const [isPwValidate, setIsPwValidate] = useState(true);
	const [isPwConfirmValidate, setIsPwConfirmValidate] = useState(false);

  const sendServerToRegister = (email, pw) => {
		axios.post(signupURL, {
			"email": JSON.stringify({email}),
			"password": JSON.stringify({pw})
		}).then((event) => {
      console.log('received', event.data.email);
      alert("회원가입 성공! ", event.data.email);
      navigate('/login');
			//localStorage.setItem("id", event);
      // setLogin(true);
      // setNickname('jeongwoo');
      // navigate('/home');
    }).catch((err) => {
			console.log(`an error occured: ${err}`);
			alert(`회원가입 실패🥺. ${err}`);
		});
	}

  return (
	<>
    <div>이메일</div>
    <InputContainer>
      <Input size="md" placeholder="E-mail" value={email} onChange={(val) => {
        const currentEmail = val.target.value;
        setEmail(currentEmail);
        setIsEmailValidate(checkEmail(currentEmail));
      }}/>
      {!isEmailValidate && <ValidationError>올바른 이메일 주소를 입력해주세요.</ValidationError>}
    </InputContainer>
    <div>비밀번호</div>
    <InputContainer>
      <Input size="md" placeholder="Password" type="password" value={pw} onChange={(val) => {
        const currentPw = val.target.value;
        setPw(currentPw);
        setIsPwValidate(checkPw(currentPw));
      }}/>
      {!isPwValidate && <ValidationError>패스워드는 8자리 이상, 알파벳, 숫자를 포함하여야 합니다.</ValidationError>}
    </InputContainer>
    <div>비밀번호 확인!</div>
    <InputContainer>
      <Input size="md" placeholder="Confirm Password" type="password" color={isPwConfirmValidate ? "neutral":"danger"} value={pwConfirm} onChange={(val) => {
        const currentPwConfirm = val.target.value;
        setPwConfirm(currentPwConfirm);
        setIsPwConfirmValidate(checkPwConfirm(pw, currentPwConfirm));
      }}/>
      {!isPwConfirmValidate && <ValidationError>패스워드가 일치하지 않습니다.</ValidationError>}
    </InputContainer>
    <Button type='button' disabled={!(isEmailValidate && isPwValidate && isPwConfirmValidate)} onClick={() => {
      sendServerToRegister(email, pw);
    }}>Register</Button>
  </>
  );
}

const ValidationError = styled.div`
	font-size: 0.7rem;
	margin-top: 0.4rem;
	right: 0;
	color: crimson;
	position: absolute;
`

const InputContainer = styled.div`
	position: relative;
	padding-bottom: 7px;
`

