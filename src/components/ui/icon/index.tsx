type IconProps = {
  onClick?: () => void
  style?: React.CSSProperties
}

export const EmailIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/email.svg'
      alt='Email icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const HideIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/hide.svg'
      alt='Hide icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const LockIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/lock.svg'
      alt='Lock icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const CarIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/car.svg'
      alt='Car icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const RideIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/ride.svg'
      alt='Ride icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const UserIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/user.svg'
      alt='User icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const SearchIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/search.svg'
      alt='Search icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const MoneyBagIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/money-bag.svg'
      alt='Money bag icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const DestinationIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/destination.svg'
      alt='Destination icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const OriginIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/origin.svg'
      alt='Origin icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const ClockIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/clock.svg'
      alt='Clock icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const PeopleIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/people.svg'
      alt='People icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const SendIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/send.svg'
      alt='Send icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const CheckIcon = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/check.svg'
      alt='Check icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const StarIconFilled = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/star-filled.svg'
      alt='Star icon filled'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}

export const StarIconLined = ({ onClick, style }: IconProps) => {
  return (
    <img
      src='/src/assets/star-lined.svg'
      alt='Star icon'
      onClick={onClick}
      style={{ ...style }}
    />
  )
}
