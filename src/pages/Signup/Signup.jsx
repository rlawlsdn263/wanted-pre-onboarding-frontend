import { Form, Input, Button, Heading1 } from '@/components';
import styles from "./Signup.module.css";

export function Signup() {
  return(
    <div className={styles.signup}>
      <Heading1 className={styles.h1}>회원가입</Heading1>
      <Form legend="회원가입" className={styles.form}>
        <Input className={styles.input} name="email" label="이메일" type="text" placeholder='이메일'></Input>
        <Input className={styles.input} name="password" label="비밀번호" type="password" placeholder='비밀번호'></Input>
        <Button className={styles.button}>회원가입</Button>
      </Form>
    </div>
  )
}