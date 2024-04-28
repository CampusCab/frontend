type ButtonProps = {
  type: 'submit' | 'button'
  variant: 'primary' | 'secondary'
  children: React.ReactNode
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={props.variant} type={props.type}>
      {props.iconLeft}
      {props.children}
      {props.iconRight}
    </button>
  )
}
