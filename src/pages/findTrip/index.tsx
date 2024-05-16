import './index.scss'

import { useState } from 'react'
import { TripInfo } from '../../config/types/trips'
import MainLayout from '../../layouts/main'
import SearchBar from '../../components/searchBar'
import TripCardList from '../../containers/tripCardList'
import { Outlet } from 'react-router-dom'

const tripsList: TripInfo[] = [
  {
    id: 1,
    driver: {
      idType: 'CC',
      idNumber: '123456789',
      firstName: 'Juan',
      lastName: 'Perez',
      stars: '4.5'
    },
    origin: 'Facultad de Minas',
    destination: 'Estación Caribe',
    date: '2022-01-01',
    hour: '06:00',
    availableSeats: 3,
    maxSeats: 4,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    driver: {
      idType: 'CC',
      idNumber: '987654321',
      firstName: 'Pedro',
      lastName: 'Gomez',
      stars: '5.0'
    },
    origin: 'Parque de Bello',
    destination: 'Campus Volador',
    date: '2022-01-01',
    hour: '06:00',
    availableSeats: 2,
    maxSeats: 4,
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const FindTripPage = () => {
  const [trips] = useState<TripInfo[]>(tripsList)
  const [hasTrip] = useState(false)

  const [search, setSearch] = useState('')
  return (
    <MainLayout>
      {!hasTrip && (
        <section className='trip-list'>
          <SearchBar value={search} onChange={(e) => setSearch(e)} />
          <h2>Viajes disponibles</h2>
          <TripCardList data={trips} />
        </section>
      )}
      <Outlet />
    </MainLayout>
  )
}

export default FindTripPage
