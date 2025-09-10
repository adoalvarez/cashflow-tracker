
type ButtonTypes = 'button' | 'submit' | 'reset'

interface ButtonProps {
  className?: string;
  children?: string;
  buttonType?: ButtonTypes;
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`${props.className} flex `} onClick={props.onClick} type={props.buttonType ?? 'button'} >
      {props.children}
    </button>
  )
}

export default Button;