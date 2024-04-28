type IconProps = {
  path?: string
  description?: string
  onClick?: () => void
}

const Icon = ({ path, description, onClick }: IconProps) => {
  return <img src={path} alt={description} onClick={onClick} />
}

export const EmailIcon = ({ onClick }: IconProps) => {
  return (
    <Icon
      path='src\assets\email.svg'
      description='Email icon'
      onClick={onClick}
    />
  )
}

export const HideIcon = ({ onClick }: IconProps) => {
  return (
    <Icon
      path='src\assets\hide.svg'
      description='Hide icon'
      onClick={onClick}
    />
  )
}

export const LockIcon = ({ onClick }: IconProps) => {
  return (
    <Icon
      path='src\assets\lock.svg'
      description='Lock icon'
      onClick={onClick}
    />
  )
}
