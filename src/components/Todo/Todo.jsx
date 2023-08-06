import styles from "./Todo.module.css";
import { useState } from 'react';
import { updateCheckTodos, updateTodos, deleteTodos } from '@/axios/_index';

export function Todo({id, todo, isCompleted, setTodoList}) {
  
  const [update, setUpdate] = useState(false);
  const [newInput, setNewInput] = useState("");

  function handleUpdate() {
    setUpdate(!update);
  }

  function handleNewInput(e) {
    setNewInput(e.target.value);
  }

  return(
    <li className={styles.todo}>
      <label className={styles.label}>
        <input className={styles.checkbox} type="checkbox" checked={isCompleted} onChange={() => updateCheckTodos(todo, setTodoList, isCompleted, id)} />
        {
          !update ? <span className={styles.span}>{todo}</span> : 
          <input className={styles.input} data-testid="modify-input" onChange={handleNewInput}/>
        }
      </label>
        {
          !update ? 
          <>
            <button className={styles.edit} data-testid="modify-button" onClick={handleUpdate}>수정</button>
            <button className={styles.delete} data-testid="delete-button" onClick={() => deleteTodos(setTodoList, id)}>삭제</button>
          </> : 
          <>
            <button className={styles.edit} data-testid="submit-button" onClick={() => updateTodos(newInput, isCompleted, setTodoList, update, setUpdate, id)}>제출</button>
            <button className={styles.delete} data-testid="cancel-button" onClick={handleUpdate}>취소</button>
          </>
        }
    </li>
  )
}