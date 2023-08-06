import { useRef } from 'react';
import styles from "./Signin.module.css";
import { Form, Input, Button, Heading1 } from '@/components';
import { useNavigate } from 'react-router-dom';
import { checkUserWithEmailAndPassword } from '@/axios/checkUserWithEmailAndPassword';

export function Signin() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  return(
    <div className={styles.signin}>
      <Heading1 className={styles.h1}>로그인</Heading1>
      <Form legend="로그인" className={styles.form}>
        <Input data-testid="email-input" forwardRef={emailRef} className={styles.input} name="email" label="이메일" type="text" placeholder='test@test.com'></Input>
        <Input data-testid="password-input" forwardRef={passwordRef} className={styles.input} name="password" label="비밀번호" type="password" placeholder='12345678'></Input>
        <Button data-testid="signup-button" onClick={()=>{checkUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value, navigate);}} className={styles.button}>로그인</Button>
      </Form>
    </div>
  )
}