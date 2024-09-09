import './index.scss'
import DriverCard from '../../components/driverCard'
import VehicleCard from '../../components/vehicleCard'
import PassengersCardList from '../../containers/passengersCardList'
import { useLocation, useNavigate } from 'react-router-dom'
import OffersCardList from '../../containers/offersCardList'
import Button from '../../components/ui/button'
import { UseAuth } from '../../hooks/useAuth'
import { CURRENT_TRIP_SERVICE } from '../../services/trips/currentTrip'
import useFetch from '../../hooks/useFetch'
import { UserInfo } from '../../config/types/user'

const YourTripPage = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const location = pathname.split('/')[1] === 'offer-trip'
  const { getTokens } = UseAuth()
  const userInfo: UserInfo = JSON.parse(localStorage.getItem('user') || '{}')

  const { response, refetch } = useFetch({
    ...CURRENT_TRIP_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  return (
    <>
      {response && (
        <section className='your-trip'>
          <h2>Tu próximo viaje</h2>
          <DriverCard user={response.driver_info} trip={response} />
          <VehicleCard vehicle={response.vehicle_info} />
          {location && <OffersCardList data={response.offers!} refetch={refetch}/>}
          <PassengersCardList data={response.offers!}/>
          <Button
            variant='danger'
            type='button'
            onClick={() => userInfo.currently_driver ? navigate(`/rate-passengers/${response.id}`): navigate(`/rate-driver/${response.id}`)}
            style={{ width: '100%', margin: '2rem 0' }}
          >
            Terminar viaje
          </Button>
        </section>
      )}
    </>
  )
}

export default YourTripPage
