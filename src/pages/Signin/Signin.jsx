import { useRef } from 'react';
import styles from "./Signin.module.css";
import { Form, Input, Button, Heading1 } from '@/components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  //유저정보를 확인해주는 함수
  function checkUserWithEmailAndPassword(email, password) {
    axios.post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
      email: email,
      password: password,
    }, {headers: {
      "Content-Type": "application/json",
    }})
    .then(response => {
      // JWT 토큰을 localStorage에 저장함
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("로그인 성공!");
      //로그인 성공할 경우 todolist로 페이지 리디렉션을 해줌
      navigate('/todo');
    })
    .catch(error => {
      console.log(error);
      //로그인 실패할 경우 input 값을 비어줌
      emailRef.current.value = "";
      passwordRef.current.value = "";
      alert("로그인 실패!")
    });
  }

  return(
    <div className={styles.signin}>
      <Heading1 className={styles.h1}>로그인</Heading1>
      <Form legend="로그인" className={styles.form}>
        <Input data-testid="email-input" forwardRef={emailRef} className={styles.input} name="email" label="이메일" type="text" placeholder='test@test.com'></Input>
        <Input data-testid="password-input" forwardRef={passwordRef} className={styles.input} name="password" label="비밀번호" type="password" placeholder='12345678'></Input>
        <Button data-testid="signup-button" onClick={()=>{checkUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);}} className={styles.button}>로그인</Button>
      </Form>
    </div>
  )
}