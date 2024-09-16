import './index.scss'

import LoginLayout from '../../layouts/login'
import { StarIconBlueFilled, StarIconLined } from '../../components/ui/icon'
import { useMemo, useState } from 'react'
import Button from '../../components/ui/button'
import { FINISH_TRIP_PASSENGER_SERVICE } from '../../services/trips/finishTrip'
import { UseAuth } from '../../hooks/useAuth'
import useFetch from '../../hooks/useFetch'
import { CURRENT_TRIP_SERVICE } from '../../services/trips/currentTrip'
import useFetchMutation from '../../hooks/useFetchMutation'
import Loader from '../../components/ui/loader'
import { useNavigate } from 'react-router-dom'
import { UserInfo } from '../../config/types/user'

const RateDriverPage = () => {
  const [rating, setRating] = useState<number>(0)
  const navigate = useNavigate()
  const { getTokens } = UseAuth()
  const userInfo: UserInfo = JSON.parse(localStorage.getItem('user') || '{}')

  const { response, isLoading } = useFetch({
    ...CURRENT_TRIP_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const { fetchService } = useFetchMutation({
    ...FINISH_TRIP_PASSENGER_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const handleSetRating = (rating: number) => {
    setRating(rating)
  }

  const renderStars = useMemo(() => {
    if (response) {
      return [1, 2, 3, 4, 5].map((item) => {
        if (item <= rating) {
          return (
            <StarIconBlueFilled
              onClick={() => handleSetRating(item)}
              style={{ cursor: 'pointer' }}
            />
          )
        } else {
          return (
            <StarIconLined
              key={item}
              onClick={() => handleSetRating(item)}
              style={{ cursor: 'pointer' }}
            />
          )
        }
      })
    }
  }, [rating, response])

  return (
    <>
      {response && (
        <LoginLayout>
          <section className='rate-driver'>
            <h2>Viaje terminado</h2>
            <div className='rate-driver__info'>
              <img src='/assets/male-avatar.svg' alt='Male avatar' />
              <div>
                <p>Califica al conductor</p>
                <h3>
                  {response.driver_info?.first_name}{' '}
                  {response.driver_info?.last_name}
                </h3>
              </div>
            </div>
            <div className='rate-driver__rate'>
              <div className='rate-driver__stars'>{renderStars}</div>
              <Button
                type='button'
                variant='primary'
                disabled={!rating}
                onClick={async () => {
                  await fetchService({
                    stars: rating
                  })
                  console.log('Trip finished', userInfo)
                  localStorage.setItem(
                    'user',
                    JSON.stringify({ ...userInfo, currently_passenger: false })
                  )
                  navigate('/')
                }}
              >
                Enviar calificación
              </Button>
            </div>
          </section>
        </LoginLayout>
      )}
      {isLoading && <Loader />}
    </>
  )
}

export default RateDriverPage
