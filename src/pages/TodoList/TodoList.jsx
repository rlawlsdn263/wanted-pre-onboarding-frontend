import { Form, Heading1, Input, Button, Todo } from '@/components';
import styles from "./TodoList.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export function TodoList() {

  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  
  useEffect(() => {
    //todo 목록 가져오기
    function getTodos() {
      const token = JSON.parse(localStorage.getItem("user")).access_token;
      axios.get('https://www.pre-onboarding-selection-task.shop/todos', {headers: {
        "Authorization": `Bearer ${token}`,
      }}).then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    }

    getTodos();
  }, [])
  
  //input에 입력된 값을 state에 저장함
  function handleTodoInput(e) {
    setInputValue(e.target.value);
  }

  //todo 추가기능
  function createTodo(todo) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.post('https://www.pre-onboarding-selection-task.shop/todos', {
      todo: todo,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      console.log(response.data);
      setTodoList([...todoList, response.data]);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
  <div className='todoList'>
    <Heading1 className={styles.h1}>투두리스트</Heading1>
    <Form className={styles.form} legend="투두리스트">
      <Input data-testid="new-todo-input" className={styles.input} name="todo" label="투두리스트" type="text" placeholder='할 일을 입력하세요' onChange={handleTodoInput} />
      <Button data-testid="new-todo-add-button" className={styles.button} onClick={()=>{createTodo(inputValue)}}>추가</Button>
    </Form>
    <ul>
      {
      todoList.map((item) => {
        return <Todo key={item.id} todo={item.todo} isCompleted={item.isCompleted} />
      })
      }
    </ul>
  </div>
  )
}