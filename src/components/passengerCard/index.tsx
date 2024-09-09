import './index.scss'

import Card from '../ui/card'
import { Offer } from '../../config/types/trips'
import { MoneyBagBlueIcon } from '../ui/icon'
import Button from '../ui/button'

type PassengerCardProps = {
  item: Offer
  hasActions?: boolean
  hasDelete?: boolean
  onAccept?: (id: number) => void
  onReject?: (id: number) => void
}

const PassengerCard = ({
  item,
  hasActions,
  onAccept,
  onReject
}: PassengerCardProps) => {
  return (
    <Card style={{ padding: '0.5rem 1rem' }}>
      <div className='passenger-card'>
        <img src={'/assets/male-avatar.svg'} alt='Passenger image' />
        <div className='passenger-card__body'>
          <h4>{item.passenger_name}</h4>
          {item.amount && (
            <div style={{ display: 'flex', gap: '10px' }}>
              <MoneyBagBlueIcon style={{ width: '20px' }} />
              <span>{item.amount}</span>
            </div>
          )}
        </div>
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
            onClick={() => {
              onAccept?.(item.id)
            }}
          >
            Aceptar
          </Button>
          <Button
            type='button'
            variant='danger'
            style={{
              minWidth: '40%',
              height: '30px',
              fontSize: '0.8rem'
            }}
            onClick={() => {
              onReject?.(item.id)
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
