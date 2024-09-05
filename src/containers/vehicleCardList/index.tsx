import './index.scss'

import VehicleCard from '../../components/vehicleCard'
import { Vehicle } from '../../config/types/trips'
import Button from '../../components/ui/button'

type VehicleCardListProps = {
  data: Vehicle[]
  onClick: (vehicle: Vehicle) => void
  selectedVehicle?: Vehicle
  onContinue: () => void
}

const VehicleCardList = ({
  data,
  selectedVehicle,
  onClick,
  onContinue
}: VehicleCardListProps) => {
  return (
    <div className='vehicle-list'>
      {data.map((vehicle, index) => (
        <VehicleCard
          vehicle={vehicle}
          onClick={onClick}
          isSelected={vehicle.id === selectedVehicle?.id}
          key={index}
        />
      ))}
      <p className='vehicle-list__message'>
        Puedes agregar más
        <br />
        vehículos desde tu perfil
      </p>
      <Button
        type='button'
        variant='primary'
        disabled={!selectedVehicle}
        onClick={onContinue}
      >
        Seleccionar
      </Button>
    </div>
  )
}

export default VehicleCardList
