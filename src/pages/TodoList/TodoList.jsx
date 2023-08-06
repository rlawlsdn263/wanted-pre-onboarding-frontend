import { Form, Heading1, Input, Button, Todo } from '@/components';
import styles from "./TodoList.module.css";
import { useEffect, useState } from 'react';
import { getTodos, createTodos } from '@/axios/_index';

export function TodoList() {

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  useEffect(() => {
    getTodos(setTodoList);
  }, [])
  
  //input에 입력된 값을 state에 저장함
  function handleTodoInput(e) {
    setInputValue(e.target.value);
  }

  return (
  <div className='todoList'>
    <Heading1 className={styles.h1}>투두리스트</Heading1>
    <Form className={styles.form} legend="투두리스트">
      <Input data-testid="new-todo-input" className={styles.input} value={inputValue} name="todo" label="투두리스트" type="text" placeholder='할 일을 입력하세요' onChange={handleTodoInput} />
      <Button data-testid="new-todo-add-button" className={styles.button} onClick={()=>{createTodos(inputValue, setInputValue, todoList, setTodoList)}}>추가</Button>
    </Form>
    <ul className={styles.ul}>
      {
      todoList.map((item) => {
        return <Todo key={item.id} todo={item.todo} isCompleted={item.isCompleted} id={item.id} setTodoList={setTodoList} handleTodoInput={handleTodoInput}/>
      })
      }
    </ul>
  </div>
  )
}