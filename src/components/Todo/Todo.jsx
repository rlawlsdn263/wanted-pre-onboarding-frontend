import styles from "./Todo.module.css";

export function Todo({children}) {
  return(
    <li className={styles.todo}>
      <label className={styles.label}>
        <input className={styles.input} type="checkbox" />
        <span className={styles.span}>{children}</span>
      </label>
      <div className={styles.buttons}>
        <button className={styles.edit}>수정</button>
        <button className={styles.delete}>삭제</button>
      </div>
    </li>
  )
}