import './index.scss'

import Card from '../ui/card'
import { Passenger } from '../../config/types/trips'
import { MoneyBagIcon } from '../ui/icon'

type PassengerCardProps = {
  item: Passenger
}

const PassengerCard = ({ item }: PassengerCardProps) => {
  return (
    <Card>
      <div className='passenger-card'>
        <img src={item.image ?? '/src/assets/male-avatar.svg'} alt='' />
        <div className='passenger-card__body'>
          <h4>
            {item.firstName} {item.lastName}
          </h4>
          {item.offer && (
            <>
              <MoneyBagIcon />
              <span>{item.offer.ammount}</span>
            </>
          )}
        </div>
      </div>
    </Card>
  )
}

export default PassengerCard
