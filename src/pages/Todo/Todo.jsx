import { Form, Heading1, Input, Button } from '@/components';
import styles from "./Todo.module.css";

export function Todo() {
  return (
  <div className='todo'>
    <Heading1 className={styles.h1}>투두리스트</Heading1>
    <Form className={styles.form} legend="투두리스트">
      <Input className={styles.input} data-testid="new-todo-input" name="todo" label="이메일" type="text" placeholder='할 일을 입력하세요' />
      <Button className={styles.button} data-testid="new-todo-add-button">추가</Button>
    </Form>
  </div>
  )
}