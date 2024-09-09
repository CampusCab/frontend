import './index.scss'

import LoginLayout from '../../layouts/login'
import { StarIconBlueFilled, StarIconLined } from '../../components/ui/icon'
import { useEffect, useState } from 'react'
import Button from '../../components/ui/button'
import {
  FINISH_TRIP_DRIVER_SERVICE,
  Rating
} from '../../services/trips/finishTrip'
import useFetch from '../../hooks/useFetch'
import { UseAuth } from '../../hooks/useAuth'
import { CURRENT_TRIP_SERVICE } from '../../services/trips/currentTrip'
import useFetchMutation from '../../hooks/useFetchMutation'
import Loader from '../../components/ui/loader'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../../config/types/user'

const RatePassengersPage = () => {
  const [rating, setRating] = useState<Rating[]>([] as Rating[])
  const  navigate  = useNavigate()
  const { getTokens } = UseAuth()
  const userInfo: UserInfo = JSON.parse(localStorage.getItem('user') || '{}')


  const { response, isLoading } = useFetch({
    ...CURRENT_TRIP_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const { fetchService } = useFetchMutation({
    ...FINISH_TRIP_DRIVER_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  useEffect(() => {
    if (response) {
      setRating(
        response.offers!.map(
          (offer) =>
            ({
              user: offer.passenger_id,
              stars: 0
            } as Rating)
        )
      )
    }
  }, [response])

  const handleSetRating = (id: number, stars: number) => {
    const newRating = rating.map((item) => {
      if (item.user === id) {
        return { user: id, stars }
      }
      return item
    })
    setRating(newRating)
  }

  const renderStars = (id: number) => {
    if (response && rating.length > 0) {
      return [1, 2, 3, 4, 5].map((item) => {
        if (item <= rating.filter((rate) => rate.user === id)[0].stars) {
          return (
            <StarIconBlueFilled
              onClick={() => handleSetRating(id, item)}
              style={{ cursor: 'pointer' }}
            />
          )
        } else {
          return (
            <StarIconLined
              key={item}
              onClick={() => handleSetRating(id, item)}
              style={{ cursor: 'pointer' }}
            />
          )
        }
      })
    }
  }

  return (
    <>
      {response && (
        <LoginLayout>
          <section className='rate-passengers'>
            <h2>Viaje terminado</h2>
            {response.offers!.map((passenger) => (
              <div className='rate-passengers__info' key={passenger.passenger_id}>
                <img src='/assets/male-avatar.svg' alt='Male avatar' />
                <div>
                  <p>Califica al pasajero</p>
                  <h3>{passenger.passenger_name}</h3>
                </div>
                <div className='rate-passengers__rate'>
                  <div className='rate-passengers__stars'>
                    {renderStars(passenger.passenger_id)}
                  </div>
                </div>
              </div>
            ))}

            <Button
              type='button'
              variant='primary'
              disabled={!!rating.find((item) => item.stars === 0)}
              onClick={async () => {
                await fetchService(rating, String(response.id));
                localStorage.setItem('user', JSON.stringify({...userInfo, currently_driver: false}))
                navigate('/')
              }}
              style={{ margin: '0 auto' }}
            >
              Enviar calificación
            </Button>
          </section>
        </LoginLayout>
      )}
      {isLoading && <Loader />}
    </>
  )
}

export default RatePassengersPage
