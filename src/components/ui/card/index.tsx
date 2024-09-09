import './index.scss'

interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}

const Card = ({ children, style, onClick }: CardProps) => {
  return (
    <div className='card' style={style} onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
