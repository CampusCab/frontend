import './index.scss'

import Card from '../ui/card'
import { Passenger } from '../../config/types/trips'
import { MinusIcon, MoneyBagBlueIcon } from '../ui/icon'
import Button from '../ui/button'

type PassengerCardProps = {
  item: Passenger
  hasActions?: boolean
  hasDelete?: boolean
}

const PassengerCard = ({ item, hasActions, hasDelete }: PassengerCardProps) => {
  return (
    <Card>
      <div className='passenger-card' style={{ padding: '1rem 0' }}>
        <img
          src={item.image ?? '/src/assets/male-avatar.svg'}
          alt='Passenger image'
        />
        <div className='passenger-card__body'>
          <h4>
            {item.firstName} {item.lastName}
          </h4>
          {item.offer && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <MoneyBagBlueIcon style={{width: '20px'}} />
              <span>{item.offer.ammount}</span>
            </div>
          )}
        </div>
        {hasDelete && <MinusIcon style={{ marginLeft: 'auto' }} />}
      </div>
      {hasActions && (
        <div className='passenger-card__actions'>
          <Button
            type='button'
            variant='primary'
            style={{
              minWidth: '40%',
              height: '30px',
              fontSize: '0.8rem'
            }}
          >
            Aceptar
          </Button>
          <Button
            type='button'
            variant='secondary'
            style={{
              minWidth: '40%',
              height: '30px',
              fontSize: '0.8rem'
            }}
          >
            Rechazar
          </Button>
        </div>
      )}
    </Card>
  )
}

export default PassengerCard
