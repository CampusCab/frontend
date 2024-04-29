import './index.scss'

import { useState } from 'react'
import { TripsList } from '../../config/types/trips'
import SearchBar from '../../components/searchBar'
import TripCardList from '../../components/cardList'

const tripsList: TripsList[] = [
  {
    id: 1,
    driver: {
      idType: 'CC',
      idNumber: '123456789',
      firstName: 'Juan',
      lastName: 'Perez',
      stars: 4.5
    },
    origin: 'Bogotá',
    destination: 'Medellín',
    date: '2022-01-01',
    hour: '06:00',
    availableSeats: 3,
    description: 'Viaje tranquilo y seguro'
  },
  {
    id: 2,
    driver: {
      idType: 'CC',
      idNumber: '987654321',
      firstName: 'Pedro',
      lastName: 'Gomez',
      stars: 5
    },
    origin: 'Medellín',
    destination: 'Bogotá',
    date: '2022-01-01',
    hour: '06:00',
    availableSeats: 2,
    description: 'Viaje tranquilo y seguro'
  }
]

const TripsAvailable = () => {
  const [trips, setTrips] = useState<TripsList[]>(tripsList)
  const [search, setSearch] = useState('')

  return (
    <section className='trip-list'>
      <SearchBar value={search} onChange={(e) => setSearch(e)} />
      <h2>Viajes disponibles</h2>
      <TripCardList data={trips} />
    </section>
  )
}

export default TripsAvailable
