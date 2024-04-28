type IconProps = {
  onClick?: () => void
  style?: React.CSSProperties
}

export const EmailIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\email.svg'
      alt='Email icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const HideIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\hide.svg'
      alt='Hide icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const LockIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\lock.svg'
      alt='Lock icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}
