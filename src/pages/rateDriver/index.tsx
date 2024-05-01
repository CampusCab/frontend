import './index.scss'

import LoginLayout from '../../layouts/login'
import { StarIconBlueFilled, StarIconLined } from '../../components/ui/icon'
import { useState } from 'react'
import { Button } from '../../components/ui/button'

const RateDriverPage = () => {
  const [rating, setRating] = useState([false, false, false, false, false])

  const handleSetRating = (index: number) => {
    const newRating = rating.map((_, i) => {
      if (i <= index) {
        return true
      }
      return false
    })
    setRating(newRating)
  }

  return (
    <LoginLayout>
      <section className='rate-driver'>
        <h2>Viaje terminado</h2>
        <div className='rate-driver__info'>
          <img src='/src/assets/male-avatar.svg' alt='Male avatar' />
          <div>
            <p>Califica al conductor</p>
            <h3>Benito Martínez</h3>
          </div>
        </div>
        <div className='rate-driver__rate'>
          <div className='rate-driver__stars'>
            {rating.map((star, index) => {
              if (star) {
                return (
                  <StarIconBlueFilled onClick={() => handleSetRating(index)} />
                )
              } else {
                return (
                  <StarIconLined
                    key={index}
                    onClick={() => handleSetRating(index)}
                    style={{ cursor: 'pointer' }}
                  />
                )
              }
            })}
          </div>
          <Button type='button' variant='primary' disabled={!rating.includes(true)}>
            Enviar calificación
          </Button>
        </div>
      </section>
    </LoginLayout>
  )
}

export default RateDriverPage
