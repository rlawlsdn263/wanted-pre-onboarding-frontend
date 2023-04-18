import styles from "./Todo.module.css";

export function Todo({id, todo, isCompleted}) {
  return(
    <li className={styles.todo} key={id}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" disabled={isCompleted} />
        <span className={styles.span}>{todo}</span>
      </label>
      <div className={styles.buttons}>
        <button className={styles.edit} data-testid="modify-button">수정</button>
        <button className={styles.delete} data-testid="delete-button">삭제</button>
      </div>
    </li>
  )
}