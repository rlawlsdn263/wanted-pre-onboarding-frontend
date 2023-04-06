import styles from "./Input.module.css";

export function Input({name, label, type, ...rest}) {
  return(
    <div>
      <label htmlFor={name} className={styles.a11yHidden}>{label}</label>
      <input id={name} name={name} type={type} {...rest}/>
    </div>
  )
}