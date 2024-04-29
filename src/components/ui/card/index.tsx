import './index.scss'

import React, { ReactNode, useState } from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  description?: string
}

const Card = (props: CardProps) => {
  const [showDescription, setShowDescription] = useState(false)
  return (
    <div
      {...props}
      onClick={() => setShowDescription(!showDescription)}
      className='card'
    >
      {props.children}
      <div>
        {showDescription && props.description && <p>{props.description}</p>}
      </div>
    </div>
  )
}

export default Card
