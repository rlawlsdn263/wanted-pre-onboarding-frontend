import styles from "./Input.module.css";

export function Input({name, label, type, forwardRef, ...rest}) {
  return(
    <div>
      <label htmlFor={name} className={styles.a11yHidden}>{label}</label>
      <input id={name} name={name} type={type} ref={forwardRef} {...rest}/>
    </div>
  )
}