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
import { TEditProfile } from '../../config/types/forms'

import EditProfileForm from '../../components/editProfileForm'
import VehicleCard from '../../components/vehicleCard'
import { Vehicle } from '../../config/types/trips'
import { useState } from 'react'
import EditVehicleForm from '../../components/editVehicleForm'
import Button from '../../components/ui/button'
import { useForm } from 'react-hook-form'

export type ProfileCardProps = {
  user: Profile
  isEditing?: boolean
  onEdit: (profile: Profile) => void
  refetch: () => void
}

const ProfileCard = ({
  user,
  isEditing,
  onEdit,
  refetch
}: ProfileCardProps) => {
  const [editingVehicle, setEditingVehicle] = useState<Vehicle>({} as Vehicle)
  const [isEditingVehicle, setIsEditingVehicle] = useState('')
  const [addingVehicle, setAddingVehicle] = useState(false)

  const { control, handleSubmit } = useForm<TEditProfile>()

  const handleEditVehicle = (vehicle: Vehicle) => {
    if (isEditingVehicle) {
      if (vehicle.license !== isEditingVehicle) {
        setEditingVehicle(vehicle)
        setIsEditingVehicle(vehicle.license)
      } else {
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

  const onSubmit = (data: TEditProfile) => {
    onEdit({ ...user, ...data })
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
            {user.first_name} {user.last_name}
          </h4>
          <div className='details__row'>
            <EmailIcon style={{ width: '20px' }} /> {user.email}
          </div>
          <div className='details__row'>
            <PhoneIcon style={{ width: '20px' }} /> {user.phone}
          </div>
          <div className='details__row'>
            <CarIcon style={{ width: '20px' }} /> {user.vehicles.length} autos
            registrados
          </div>
        </div>
        {isEditing && (
          <>
            <form action='form' onSubmit={handleSubmit(onSubmit)}>
              <EditProfileForm
                firstName={user.first_name}
                lastName={user.last_name}
                phone={user.phone}
                control={control}
              />
              <Button type='submit' variant='primary' style={{ width: '100%' }}>
                Guardar
              </Button>
            </form>
            {user.vehicles.map((car) => (
              <>
                <VehicleCard
                  vehicle={car}
                  key={car.license}
                  editingVehicle={isEditingVehicle}
                  handleEdit={() => handleEditVehicle(car)}
                />
                {editingVehicle.license === car.license && (
                  <EditVehicleForm
                    id={editingVehicle.id}
                    licence={editingVehicle.license}
                    max_passengers={editingVehicle.max_passengers}
                    model={editingVehicle.model}
                    onClose={() => {
                      handleEditVehicle({} as Vehicle)
                    }}
                    refetch={refetch}
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
              <EditVehicleForm
                onClose={() => {
                  setAddingVehicle(false)
                }}
                refetch={refetch}
              />
            )}
          </>
        )}
      </div>
    </Card>
  )
}

export default ProfileCard
