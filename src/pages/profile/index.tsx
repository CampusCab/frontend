import './index.scss'

import MainLayout from '../../layouts/main'
import ProfileCard from '../../containers/profileCard'
import RidesCount from '../../components/ridesCounts'
import Button from '../../components/ui/button'
import { UseAuth } from '../../hooks/useAuth'
import { EditIcon } from '../../components/ui/icon'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { GET_PROFILE_SERVICE } from '../../services/accounts/getProfile'
import Loader from '../../components/ui/loader'
import useFetchMutation from '../../hooks/useFetchMutation'
import { UPDATE_PROFILE } from '../../services/accounts/updateProfile'
import { type Profile } from '../../config/types/user'
import { usePopUp } from '../../components/ui/popUp'

const Profile = () => {
  const { addPopUp } = usePopUp()
  const { logout, getTokens } = UseAuth()
  const [isEditing, setIsEditing] = useState(false)
  const {
    response: userProfile,
    isLoading,
    refetch
  } = useFetch({
    ...GET_PROFILE_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })
  const { fetchService, isLoading: isLoadingUpdate } = useFetchMutation({
    ...UPDATE_PROFILE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`,
      Accept: '*/*',
      'Content-Type': 'application/json'
    }
  })

  const handleEdit = (profile: Profile) => {
    if (isEditing) {
      fetchService(profile)
        .then(() => refetch())
        .catch(() => {
          addPopUp('danger', 'No se pudo actualizar el perfil')
        })
        .finally(() => setIsEditing(false))
    }
  }

  return (
    <>
      <MainLayout>
        <section className='profile'>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2>Tu perfil</h2>
            {!isEditing && (
              <Button
                variant='primary'
                type='button'
                style={{
                  minWidth: 'auto',
                  padding: '10px',
                  marginLeft: 'auto'
                }}
                iconLeft={<EditIcon style={{ width: '20px' }} />}
                onClick={() => setIsEditing(!isEditing)}
              />
            )}
          </div>
          {userProfile && (
            <>
              <ProfileCard
                user={userProfile as Profile}
                isEditing={isEditing}
                onEdit={handleEdit}
                refetch={refetch}
              />
              {!isEditing && (
                <>
                  {userProfile.trips.as_driver && (
                    <>
                      <h2>Como conductor</h2>
                      <RidesCount
                        role='driver'
                        trips={userProfile.trips.as_driver.length}
                        rate={userProfile.rating_driver === 0 ? 5 : Number(userProfile.rating_driver.toPrecision(2))}
                        money={userProfile.trips.total_collected}
                      />
                    </>
                  )}

                  {userProfile.trips.as_passenger && (
                    <>
                      <h2>Como pasajero</h2>
                      <RidesCount
                        role='passanger'
                        trips={userProfile.trips.as_passenger.length}
                        rate={userProfile.rating_passenger === 0 ? 5 : Number(userProfile.rating_passenger.toPrecision(2))}
                      />
                    </>
                  )}

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
            </>
          )}
        </section>
      </MainLayout>
      {isLoading || (isLoadingUpdate && <Loader />)}
    </>
  )
}

export default Profile
