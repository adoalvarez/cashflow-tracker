
interface Props {
  className?: string
  children?: string
}

const Label = (props: Props) => {
  return (
    <p>{props.children}</p>
  )
}

export default Label;