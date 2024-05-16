import './index.scss'

import { useState } from 'react'
import ActionModal from '../../components/actionModal'
import Button from '../../components/ui/button'
import { WarningIcon } from '../../components/ui/icon'
import MainLayout from '../../layouts/main'
import { Outlet, useNavigate } from 'react-router-dom'
import OfferTripForm from '../../containers/offerTripForm'

const OfferTripPage = () => {
  const [showModal] = useState(false)
  const [hasTrip] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <MainLayout>
        {!hasTrip && <OfferTripForm />}
        <Outlet />
      </MainLayout>
      <ActionModal
        show={showModal}
        header={<WarningIcon />}
        children={
          <p>
            Para poder ofrecer un viaje primero debes de registrar un vehiculo a
            tu nombre.
          </p>
        }
        actions={[
          <Button type='button' variant='primary'>
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
    </>
  )
}

export default OfferTripPage
