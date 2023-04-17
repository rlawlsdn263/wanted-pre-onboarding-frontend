import { Form, Heading1, Input, Button, Todo } from '@/components';
import styles from "./TodoList.module.css";
import { useRef } from 'react';

export function TodoList() {

  const todoListRef = useRef(null);

  function handleClick() {
    console.log(todoListRef.current.value);
  }

  return (
  <div className='todoList'>
    <Heading1 className={styles.h1}>투두리스트</Heading1>
    <Form className={styles.form} legend="투두리스트">
      <Input data-testid="new-todo-input" className={styles.input} forwardRef={todoListRef} name="todo" label="이메일" type="text" placeholder='할 일을 입력하세요' />
      <Button data-testid="new-todo-add-button" className={styles.button} onClick={handleClick}>추가</Button>
    </Form>
    <ul>
      <Todo>TODO 1</Todo>
      <Todo>TODO 1</Todo>
      <Todo>TODO 1</Todo>
    </ul>
  </div>
  )
}