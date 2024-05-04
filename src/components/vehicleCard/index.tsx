import './index.scss'

import { Vehicle } from '../../config/types/trips'
import Card from '../ui/card'
import { InfoIcon, PeopleIcon } from '../ui/icon'

type VehicleCardProps = {
  item: Vehicle
  onClick?: (vehicle: Vehicle) => void
}

const VehicleCard = ({ item, onClick }: VehicleCardProps) => {
  return (
    <Card onClick={() => onClick && onClick(item)}>
      <div className='vehicle-card' style={{ padding: '1rem 0' }}>
        <img src={`/assets/${item.type}.svg`} alt='Vehicule image' />
        <div className='vehicle-card__body'>
          <h4>{item.id}</h4>
          <div className='vehicle-info'>
            <InfoIcon />
            <p>
              {item.brand} {item.model} {item.year}
            </p>
          </div>
          <div className='vehicle-capacity'>
            <PeopleIcon />
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
