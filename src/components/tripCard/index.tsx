import './index.scss'

import { useState } from 'react'
import Input from '../ui/input'
import Button from '../ui/button'
import { CheckIcon, MoneyBagIcon, SendIcon } from '../ui/icon'
import DriverCard, { DriverCardProps } from '../driverCard'

interface TripCardProps extends DriverCardProps {
  success?: boolean
}

const TripCard = ({ item, success }: TripCardProps) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <DriverCard item={item} onClick={handleShowDescription}>
      {showDescription && (
        <div className='description'>
          <p>{item.description}</p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {success ? (
              <>
                <CheckIcon style={{ margin: '1rem 0' }} />
                <h4
                  style={{
                    color: '#52C550',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}
                >
                  Oferta enviada con éxito
                </h4>
              </>
            ) : (
              <>
                <Input
                  name='offer'
                  type='number'
                  value=''
                  variant='rounded'
                  placeholder='Tu oferta'
                  icon={<MoneyBagIcon />}
                />
                <Button
                  type='button'
                  variant='inverse'
                  iconLeft={<SendIcon />}
                  style={{ margin: '1rem 0' }}
                >
                  Enviar
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </DriverCard>
  )
}

export default TripCard
