import './index.scss'

import { useEffect, useState } from 'react'
import ActionModal from '../../components/actionModal'
import Button from '../../components/ui/button'
import { WarningIcon } from '../../components/ui/icon'
import MainLayout from '../../layouts/main'
import { Outlet, useNavigate } from 'react-router-dom'
import OfferTripForm from '../../containers/offerTripForm'
import { UseAuth } from '../../hooks/useAuth'
import useFetch from '../../hooks/useFetch'
import { MY_VEHICLES_SERVICE } from '../../services/vehicles/myVehicles'
import Loader from '../../components/ui/loader'

const OfferTripPage = () => {
  const navigate = useNavigate()
  const currentTrip = JSON.parse(localStorage.getItem('user')  || '{}')
  const { getTokens } = UseAuth()
  const [ hasActiveTrip, setHasActiveTrip ] = useState(false)
  const { response, isLoading } = useFetch({
    ...MY_VEHICLES_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  useEffect(() => {
    if (currentTrip.currently_driver && !isLoading  ) {
      navigate(`/offer-trip/your-trip/${currentTrip.id}`)
    }
  }, [isLoading, hasActiveTrip])

  useEffect(() => {
    if (currentTrip.currently_passenger && !isLoading) {
      navigate('/find-trip')
    }
  },[currentTrip, isLoading])


  return (
    <>
      <MainLayout>
        {(!currentTrip.currently_passenger && !currentTrip.currently_driver && response && response.length) && (
          <OfferTripForm data={response} isLoading={isLoading} setHasActiveTrip={()=>setHasActiveTrip(true)} />
        )}
        <Outlet />
      </MainLayout>
      <ActionModal
        show={response && !response.length}
        header={<WarningIcon />}
        children={
          <p>
            Para poder ofrecer un viaje primero debes de registrar un vehiculo a
            tu nombre.
          </p>
        }
        actions={[
          <Button
            type='button'
            variant='primary'
            onClick={() => navigate('/profile')}
          >
            Registrar vehiculo
          </Button>,
          <Button
            type='button'
            variant='secondary'
            onClick={() => navigate('/')}
          >
            Volver
          </Button>
        ]}
      />
      {isLoading && <Loader />}
    </>
  )
}

export default OfferTripPage
