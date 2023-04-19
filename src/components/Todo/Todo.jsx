import axios from 'axios';
import styles from "./Todo.module.css";
import { useState } from 'react';

export function Todo({id, todo, isCompleted, setTodoList}) {
  
  const [update, setUpdate] = useState(false);
  const [newInput, setNewInput] = useState("");

  // 삭제가 될 때마다 다시 getTodos가 실행됨
  function getTodos() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.get('https://www.pre-onboarding-selection-task.shop/todos', {headers: {
      "Authorization": `Bearer ${token}`,
    }}).then(response => {
      setTodoList([...response.data]);
    })
    .catch(error => {
      console.log(error);
    });
  }

  //체크버튼 수정
  function updateCheckTodo() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      todo: todo,
      isCompleted: !isCompleted,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      getTodos();
    })
    .catch(error => {
      console.log(error);
    });
  }

  //업데이트 기능
  function updateTodo() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      todo: newInput,
      isCompleted: isCompleted,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      getTodos();
      setUpdate(!update);
    })
    .catch(error => {
      console.log(error);
    });
  }

  //Todo 삭제 기능
  function deleteTodo() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
     headers: {
        "Authorization": `Bearer ${token}`,
      }}).then(response => {
        getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  function handleNewInput(e) {
    setNewInput(e.target.value);
  }

  return(
    <li className={styles.todo}>
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" checked={isCompleted} onChange={updateCheckTodo} />
        {
          !update ? <span className={styles.span}>{todo}</span> : 
          <input className={styles.input} data-testid="modify-input" onChange={handleNewInput}/>
        }
      </label>
        {
          !update ? 
          <>
            <button className={styles.edit} data-testid="modify-button" onClick={handleUpdate}>수정</button>
            <button className={styles.delete} data-testid="delete-button" onClick={deleteTodo}>삭제</button>
          </> : 
          <>
            <button className={styles.edit} data-testid="submit-button" onClick={updateTodo}>제출</button>
            <button className={styles.delete} data-testid="cancel-button" onClick={handleUpdate}>취소</button>
          </>
        }
    </li>
  )
}