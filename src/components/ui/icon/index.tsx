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

export const CarIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\car.svg'
      alt='Car icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const RideIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\ride.svg'
      alt='Ride icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const UserIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\user.svg'
      alt='User icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const SearchIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='src\assets\search.svg'
      alt='Search icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}
