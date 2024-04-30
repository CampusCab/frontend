import './index.scss'

interface CardProps {
  children: React.ReactNode
  onClick?: () => void
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <div className='card' onClick={onClick}>
      {children}
    </div>
  )
}

export default Card
