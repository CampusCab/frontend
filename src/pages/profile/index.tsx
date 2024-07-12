import './index.scss'

import MainLayout from '../../layouts/main'
import ProfileCard from '../../containers/profileCard'
import RidesCount from '../../components/ridesCounts'
import { Profile as ProfileType } from '../../config/types/user'
import Button from '../../components/ui/button'
import { UseAuth } from '../../hooks/useAuth'
import { EditIcon, SaveIcon } from '../../components/ui/icon'
import { useState } from 'react'

const profileMock: ProfileType = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@gmail.com',
  carsRegistered: [
    {
      type: 'car',
      license: '1234',
      max_passengers: 4,
      model: 'Toyota Corolla 2020',
    },
    {
      type: 'car',
      license: '5432',
      max_passengers: 4,
      model: 'Kia Picanto 2019',
    }
  ],
  phone: '1234567890',
  trips: {
    asDriver: {
      amount: 5,
      stars: 4,
      comments: ['Good driver']
    },
    asPassenger: {
      amount: 10,
      stars: 5,
      comments: ['Good passenger']
    }
  },
  amounts: {
    money: 12345,
    commissions: 123
  }
}

const Profile = () => {
  const { logout } = UseAuth()
  const [isEditing, setIsEditing] = useState(false)

  const handleEdit = () => {
    if (isEditing) {
      // Save changes
    }
    setIsEditing(!isEditing)
  }

  return (
    <>
      <MainLayout>
        <section className='profile'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Tu perfil</h2>
            <Button
              variant='primary'
              type='button'
              style={{ minWidth: 'auto', padding: '10px', marginLeft: 'auto' }}
              iconLeft={
                !isEditing ? (
                  <EditIcon style={{ width: '20px' }} />
                ) : (
                  <SaveIcon style={{ width: '20px' }} />
                )
              }
              onClick={() => handleEdit()}
            />
          </div>
          <ProfileCard user={profileMock} isEditing={isEditing} />
          {!isEditing && (
            <>
              <h2>Como conductor</h2>
              <RidesCount
                role='driver'
                data={profileMock.trips.asDriver}
                amounts={profileMock.amounts}
              />
              <h2>Como pasajero</h2>
              <RidesCount
                role='passanger'
                data={profileMock.trips.asPassenger}
              />
              <Button
                type='button'
                variant='primary'
                style={{ width: '100%', margin: '2rem 0' }}
                onClick={() => logout()}
              >
                Cerrar sesión
              </Button>
            </>
          )}
        </section>
      </MainLayout>
    </>
  )
}

export default Profile
