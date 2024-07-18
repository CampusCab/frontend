import { Profile } from '../../config/types/user'
import Card from '../../components/ui/card'
import {
  AddIcon,
  CarIcon,
  CarWhiteIcon,
  EmailIcon,
  PhoneIcon
} from '../../components/ui/icon'

import './index.scss'

import EditProfileForm from '../../components/editProfileForm'
import VehicleCard from '../../components/vehicleCard'
import { Vehicle } from '../../config/types/trips'
import { useState } from 'react'
import EditVehicleForm from '../../components/editVehicleForm'
import Button from '../../components/ui/button'

export type ProfileCardProps = {
  user: Profile
  isEditing?: boolean
}

const ProfileCard = ({ user, isEditing }: ProfileCardProps) => {
  const [editingVehicle, setEditingVehicle] = useState<Vehicle>({} as Vehicle)
  const [isEditingVehicle, setIsEditingVehicle] = useState('')
  const [addingVehicle, setAddingVehicle] = useState(false)

  const handleEditVehicle = (vehicle: Vehicle) => {
    if (isEditingVehicle) {
      if (vehicle.license !== isEditingVehicle) {
        setEditingVehicle(vehicle)
        setIsEditingVehicle(vehicle.license)
      } else {
        // Save
        setEditingVehicle({} as Vehicle)
        setIsEditingVehicle('')
      }
    } else {
      setEditingVehicle(vehicle)
      setIsEditingVehicle(vehicle.license)
    }
  }

  const handleAddVehicle = () => {
    setAddingVehicle(!addingVehicle)
  }

  return (
    <Card>
      <div className='profile-card' style={{ padding: '1rem 0' }}>
        <div>
          <img
            style={{ marginRight: '1rem' }}
            className='driver-image'
            src={user.image ?? '/assets/male-avatar.svg'}
            alt='CampusCab banner'
          />
        </div>
        <div className='details'>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <div className='details__row'>
            <EmailIcon style={{ width: '20px' }} /> {user.email}
          </div>
          <div className='details__row'>
            <PhoneIcon style={{ width: '20px' }} /> {user.phone}
          </div>
          <div className='details__row'>
            <CarIcon style={{ width: '20px' }} /> {user.carsRegistered.length}{' '}
            autos registrados
          </div>
        </div>
        {isEditing && (
          <>
            <EditProfileForm
              firstName={user.firstName}
              lastName={user.lastName}
              phone={user.phone}
            />
            {user.carsRegistered.map((car) => (
              <>
                <VehicleCard
                  item={car}
                  key={car.license}
                  editingVehicle={isEditingVehicle}
                  handleEdit={() => handleEditVehicle(car)}
                />
                {editingVehicle.license === car.license && (
                  <EditVehicleForm
                    licence={editingVehicle.license}
                    max_passengers={editingVehicle.max_passengers}
                    model={editingVehicle.model}
                    handleCancel={() => handleEditVehicle({} as Vehicle)}
                  />
                )}
              </>
            ))}
            <Button
              type='button'
              variant='primary'
              className='add-vehicle__button'
              iconLeft={<CarWhiteIcon />}
              iconRight={<AddIcon />}
              onClick={() => handleAddVehicle()}
            >
              {!addingVehicle ? 'Agregar nuevo vehículo' : 'Guardar vehículo'}
            </Button>
            {addingVehicle && (
              <EditVehicleForm handleCancel={() => setAddingVehicle(false)} />
            )}
          </>
        )}
      </div>
    </Card>
  )
}

export default ProfileCard
