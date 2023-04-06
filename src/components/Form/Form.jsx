import styles from "./Form.module.css";

export function Form({action="/", method="post", legend, children, ...rest}) {
  return (
    <form action={action} method={method} {...rest}>
      <fieldset className={styles.a11yHidden}>
        <legend>{legend}</legend>
      </fieldset>
      {children}
    </form>
  )
}