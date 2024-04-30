import './index.scss'

import Card from '../ui/card'
import { useState } from 'react'
import { TripsList } from '../../config/types/trips'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  CheckIcon,
  ClockIcon,
  DestinationIcon,
  MoneyBagIcon,
  OriginIcon,
  PeopleIcon,
  SendIcon
} from '../ui/icon'

type TripCardProps = {
  item: TripsList
  success?: boolean
}

const TripCard = ({ item, success }: TripCardProps) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <Card onClick={() => handleShowDescription()}>
      <>
        <div className='trip'>
          <img
            src={item.driver.image ?? '/src/assets/male-avatar.svg'}
            alt='Campuscap banner'
          />
          <div className='details'>
            <h4>
              {item.driver.firstName} {item.driver.lastName}
            </h4>
            <div className='details__places'>
              <OriginIcon />
              {item.origin} → <DestinationIcon />
              {item.destination}
            </div>
            <div className='details__hour'>
              <ClockIcon /> <p>{item.hour}</p> -
              <PeopleIcon />
              <p>
                {item.availableSeats}/{item.maxSeats} Pasajeros
              </p>
            </div>
          </div>
        </div>
        {showDescription && (
          <div className='description'>
            <p>{item.description}</p>
            <div
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center'}}
            >
              {success ? (
                <>
                  <CheckIcon style={{margin: '1rem 0'}}/>
                  <h4 style={{ color: '#52C550', fontSize: '1.3rem', fontWeight: 'bold' }}>
                    Oferta enviada con éxito
                  </h4>
                </>
              ) : (
                <>
                  <Input
                    name='ofert'
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
      </>
    </Card>
  )
}

export default TripCard
