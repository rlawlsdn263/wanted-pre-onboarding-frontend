export function Button({type="button", forwardRef, children, ...rest }) {
  return <button type={type} ref={forwardRef} {...rest}>{children}</button>;
}