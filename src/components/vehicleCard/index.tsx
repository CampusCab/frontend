import './index.scss'

import { Vehicle } from '../../config/types/trips'
import Card from '../ui/card'

type VehicleCardProps = {
  item: Vehicle
}

const VehicleCard = ({ item }: VehicleCardProps) => {
  return (
    <Card>
      <div className='vehicle-card'>
        <img src={`/src/assets/${item.type}.svg`} alt='' />
        <div className='vehicle-card__body'>
          <h4>{item.id}</h4>
          <div className='vehicle-info'>
            <img src='/src/assets/info.svg' alt='' />
            <p>
              {item.brand} {item.model} {item.year}
            </p>
          </div>
          <div className='vehicle-capacity'>
            <img src='/src/assets/people.svg' alt='' />
            <p>
              <strong>Capacidad máxima:</strong> {item.seats} pasajeros
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VehicleCard
