import './index.scss'
import DriverCard from '../../components/driverCard'
import { Passenger, TripInfo, Vehicle } from '../../config/types/trips'
import VehicleCard from '../../components/vehicleCard'
import PassengersCardList from '../../containers/passengersCardList'
import { useLocation } from 'react-router-dom'
import OffersCardList from '../../containers/offersCardList'

const item: TripInfo = {
  id: 1,
  driver: {
    idType: 'CC',
    idNumber: '123456789',
    firstName: 'Juan',
    lastName: 'Perez',
    stars: '4.5'
  },
  origin: 'Bogotá',
  destination: 'Medellín',
  date: '2022-01-01',
  hour: '06:00',
  availableSeats: 3,
  maxSeats: 4,
  description:
    'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const vehicle: Vehicle = {
  id: 'ABC-123',
  type: 'car',
  brand: 'Chevrolet',
  model: 'Spark',
  year: 2020,
  seats: 4
}

const passengers: Passenger[] = [
  {
    idType: 'CC',
    idNumber: '123456789',
    firstName: 'Juan',
    lastName: 'Perez'
  },
  {
    idType: 'CC',
    idNumber: '987654321',
    firstName: 'Maria',
    lastName: 'Rodriguez'
  }
]

const offers: Passenger[] = [
  {
    idType: 'CC',
    idNumber: '123456789',
    firstName: 'Juan',
    lastName: 'Perez',
    offer: {
      id: 1,
      trip: item,
      ammount: 30000
    }
  }
]

const YourTripPage = () => {
  const { pathname } = useLocation()
  const location = pathname.split('/')[1] === 'offer-trip'

  return (
    <section className='your-trip'>
      <h2>Tu próximo viaje</h2>
      <DriverCard item={item} />
      <VehicleCard item={vehicle} />
      {location && <OffersCardList data={offers} />}
      <PassengersCardList data={passengers} />
    </section>
  )
}

export default YourTripPage
