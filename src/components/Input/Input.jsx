export function Input({name, label, type, ...rest}) {
  return(
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} {...rest}/>
    </div>
  )
}