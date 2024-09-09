import './index.scss'

import { Vehicle } from '../../config/types/trips'
import Card from '../ui/card'
import { EditIcon, InfoIcon, PeopleIcon } from '../ui/icon'
import Button from '../ui/button'

type VehicleCardProps = {
  vehicle: Vehicle
  editingVehicle?: string
  isSelected?: boolean
  onClick?: (vehicle: Vehicle) => void
  handleEdit?: () => void
}

const VehicleCard = ({
  vehicle,
  editingVehicle,
  isSelected,
  onClick,
  handleEdit
}: VehicleCardProps) => {
  return (
    <Card
      onClick={() => onClick && onClick(vehicle)}
      style={isSelected ? {
        border: '3px solid #8EB826',
      } : undefined}
    >
      <div className='vehicle-card' style={{ padding: '1rem 0' }}>
        <img src={`/assets/car.svg`} alt='Vehicule image' />
        <div className='vehicle-card__body'>
          <h4>{vehicle.license}</h4>
          <div className='vehicle-info'>
            <InfoIcon />
            <p>{vehicle.model}</p>
          </div>
          <div className='vehicle-capacity'>
            <PeopleIcon />
            <p>
              <strong>Capacidad:</strong> {vehicle.max_passengers} pasajeros
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
