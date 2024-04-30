import './index.scss'

interface ButtonProps  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit' | 'button'
  variant: 'primary' | 'secondary' | 'inverse'
  children?: React.ReactNode
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className={`${props.variant} ${props.className}`} >
      {props.iconLeft}
      {props.children}
      {props.iconRight}
    </button>
  )
}
