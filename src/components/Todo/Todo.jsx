import axios from 'axios';
import styles from "./Todo.module.css";
import { useEffect, useState } from 'react';

export function Todo({id, todo, isCompleted, setTodoList}) {
  
  const [update, setUpdate] = useState(false);

  /* const [isChecked, setIsChecked] = useState(false);

  function handleIsChecked(e) {
    setIsChecked(e.target.checked);
    updateChecked(e.target.checked)
  } */

  //Todo 업데이트 기능
  /* function updateChecked(checked) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.put(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
      todo: todo,
      isCompleted: checked,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }}).then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  } */

  // 삭제가 될 때마다 다시 getTodos가 실행됨
  function getTodos() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.get('https://www.pre-onboarding-selection-task.shop/todos', {headers: {
      "Authorization": `Bearer ${token}`,
    }}).then(response => {
      console.log(response.data);
      setTodoList([...response.data]);
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
        console.log(response);
        getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleUpdate() {
    setUpdate(!update);
  }

  return(
    <li className={styles.todo}>
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" /* checked={isChecked} onChange={handleIsChecked} */ />
        {
          !update ? <span className={styles.span}>{todo}</span> : <input className={styles.input} data-testid="modify-input"/>
        }
      </label>
        {
          !update ? 
          <>
            <button className={styles.edit} data-testid="modify-button" onClick={handleUpdate}>수정</button>
            <button className={styles.delete} data-testid="delete-button" onClick={deleteTodo}>삭제</button>
          </> : 
          <>
            <button className={styles.edit} data-testid="submit-button">제출</button>
            <button className={styles.delete} data-testid="cancel-button" onClick={handleUpdate}>취소</button>
          </>
        }
    </li>
  )
}