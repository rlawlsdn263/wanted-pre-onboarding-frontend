import axios from 'axios';
import styles from "./Todo.module.css";

export function Todo({id, todo, isCompleted, setTodoList}) {
  
  //Todo 업데이트 기능
  /* function updateTodo(todo, isCompleted) {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.put(`https://www.pre-onboarding-selection-task.shop/todos/:${id}`, {
      todo: todo,
      isCompleted: isCompleted,
    }, {headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }})
  } */

  // 삭제가 될 때마다 다시 getTodos가 실행됨
  function getTodos() {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    axios.get('https://www.pre-onboarding-selection-task.shop/todos', {headers: {
      "Authorization": `Bearer ${token}`,
    }}).then(response => {
      // console.log(response.data);
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

  return(
    <li className={styles.todo}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" disabled={isCompleted} />
        <span className={styles.span}>{todo}</span>
      </label>
      <button className={styles.edit} data-testid="modify-button" /* onClick={updateTodo} */>수정</button>
      <button className={styles.delete} data-testid="delete-button" onClick={deleteTodo}>삭제</button>
    </li>
  )
}