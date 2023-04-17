import { Form, Input, Button, Heading1 } from '@/components';
import styles from "./Signup.module.css";
import { useRef } from 'react';

export function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function checkEmailInput() {
    const regex = /@/;
    if (!regex.test(emailRef.current.value)) {
      return false;
    } else {
      return true;
    }
  }

  function checkPasswordInput() {
    const regex = /^.{8,}$/;
    if (!regex.test(passwordRef.current.value)) {
      return false;
    } else {
      return true;
    }
  }

  function handleClickToRegister() {
    if(checkEmailInput() && checkPasswordInput()){
      alert("회원가입 성공");
    } else {
      alert("회원가입 실패")
    }
  }

  return(
    <div className={styles.signup}>
      <Heading1 className={styles.h1}>회원가입</Heading1>
      <Form legend="회원가입" className={styles.form}>
        <Input className={styles.input} forwardRef={emailRef} name="email" label="이메일" type="text" placeholder='test@test.com'></Input>
        <Input className={styles.input} forwardRef={passwordRef} name="password" label="비밀번호" type="password" placeholder='12345678'></Input>
        <Button className={styles.button} onClick={handleClickToRegister}>회원가입</Button>
      </Form>
    </div>
  )
}