import './index.scss'

import { useContext, useEffect, useState } from 'react'
import Input from '../ui/input'
import Button from '../ui/button'
import { CheckIcon, MoneyBagIcon, SendIcon } from '../ui/icon'
import DriverCard, { DriverCardProps } from '../driverCard'
import { UseAuth } from '../../hooks/useAuth'
import useFetchMutation from '../../hooks/useFetchMutation'
import { SEND_OFFER } from '../../services/offers/sendOffer'
import { UserContext } from '../../providers/userContext'

interface TripCardProps extends DriverCardProps {}

const TripCard = ({ trip }: TripCardProps) => {
  const [showDescription, setShowDescription] = useState(false)
  const [offer, setOffer] = useState<number>(0)
  const [success, setSuccess] = useState(false)

  const { getTokens } = UseAuth()
  const { fetchService } = useFetchMutation({
    ...SEND_OFFER,
    headers: { Authorization: `Bearer ${getTokens().access_token}` }
  })

  const { userInfo } = useContext(UserContext)

  const handleShowDescription = () => {
    if (!success) {
      setShowDescription(!showDescription)
    }
  }

  const handleSendOffer = async () => {
    await fetchService(
      {
        amount: offer
      },
      String(trip?.id)
    )
      .then(() => {
        setSuccess(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    if (trip.offers?.some((o) => o.passenger_id === userInfo.id)) {
      setSuccess(true)
      setShowDescription(true)
    }
  }, [trip, userInfo.id])

  return (
    <DriverCard
      user={trip.driver_info}
      trip={trip}
      onClick={handleShowDescription}
    >
      {showDescription && (
        <div className='description'>
          <p>{trip.description}</p>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {success ? (
              <>
                <CheckIcon style={{ margin: '1rem 0', height: '35px' }} />
                <h4
                  style={{
                    color: '#8EB826',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}
                >
                  Oferta enviada con éxito
                </h4>
              </>
            ) : (
              <>
                <Input
                  name='offer'
                  type='number'
                  value={offer}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    if (value < 0) return
                    setOffer(value)
                  }}
                  variant='rounded'
                  placeholder='Tu oferta'
                  icon={<MoneyBagIcon />}
                />
                <Button
                  type='button'
                  variant='primary'
                  iconLeft={<SendIcon style={{ width: '20px' }} />}
                  style={{
                    margin: '1rem 0',
                    color: '#fff',
                    minWidth: 'fit-content'
                  }}
                  onClick={handleSendOffer}
                >
                  Enviar
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </DriverCard>
  )
}

export default TripCard
