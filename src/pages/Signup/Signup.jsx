import { Form, Input, Button, Heading1 } from '@/components';
import styles from "./Signup.module.css";
import { useRef } from 'react';
import axios from 'axios';

export function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);

  // 이메일 유효성 검사 함수
  function checkEmailInput() {
    const regex = /@/;
    if (!regex.test(emailRef.current.value)) {
      return false;
    } else {
      return true;
    }
  }

  // 비밀번호 유효성 검사 함수
  function checkPasswordInput() {
    const regex = /^.{8,}$/;
    if (!regex.test(passwordRef.current.value)) {
      return false;
    } else {
      return true;
    }
  }

  // 버튼 활성화 함수
  function handleButton() {
    if(emailRef.current.value || passwordRef.current.value) {
      buttonRef.current.disabled = false;
    }
  }

  // 회원가입 통신 함수
  function createUserWithEmailAndPassword(email, password) {
    axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
      email: email,
      password: password,
    }, {headers: {
      "Content-Type": "application/json",
    }})
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // 회원가입 기능 함수
  function handleClickToRegister() {
    if(checkEmailInput() && checkPasswordInput()){
      createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value);
      alert("회원가입 성공");
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      buttonRef.current.disabled = true;
      alert("회원가입 실패")
    }
  }

  return(
    <div className={styles.signup}>
      <Heading1 className={styles.h1}>회원가입</Heading1>
      <Form legend="회원가입" className={styles.form}>
        <Input data-testid="email-input" className={styles.input} forwardRef={emailRef} onChange={handleButton} name="email" label="이메일" type="text" placeholder='test@test.com'></Input>
        <Input data-testid="password-input" className={styles.input} forwardRef={passwordRef} onChange={handleButton} name="password" label="비밀번호" type="password" placeholder='12345678'></Input>
        <Button data-testid="signup-button" className={styles.button} forwardRef={buttonRef} onClick={handleClickToRegister}>회원가입</Button>
      </Form>
    </div>
  )
}