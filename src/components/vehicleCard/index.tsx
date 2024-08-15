import './index.scss'

import { Vehicle } from '../../config/types/trips'
import Card from '../ui/card'
import { EditIcon, InfoIcon, PeopleIcon } from '../ui/icon'
import Button from '../ui/button'

type VehicleCardProps = {
  item: Vehicle
  onClick?: (vehicle: Vehicle) => void
  editingVehicle?: string
  handleEdit?: () => void
}

const VehicleCard = ({
  item,
  onClick,
  editingVehicle,
  handleEdit
}: VehicleCardProps) => {
  return (
    <Card onClick={() => onClick && onClick(item)}>
      <div className='vehicle-card' style={{ padding: '1rem 0' }}>
        <img src={`/assets/${item.vehicle_type}.svg`} alt='Vehicule image' />
        <div className='vehicle-card__body'>
          <h4>{item.license}</h4>
          <div className='vehicle-info'>
            <InfoIcon />
            <p>{item.model}</p>
          </div>
          <div className='vehicle-capacity'>
            <PeopleIcon />
            <p>
              <strong>Capacidad:</strong> {item.max_passengers} pasajeros
            </p>
          </div>
        </div>
        {handleEdit && !editingVehicle && (
          <Button
            variant='primary'
            type='button'
            style={{
              minWidth: 'auto',
              padding: '10px',
              marginLeft: 'auto',
              height: 'fit-content'
            }}
            iconLeft={<EditIcon style={{ width: '20px' }} />}
            onClick={() => handleEdit()}
          />
        )}
      </div>
    </Card>
  )
}

export default VehicleCard
