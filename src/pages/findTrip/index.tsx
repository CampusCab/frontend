import './index.scss'

import { useEffect, useState } from 'react'
import MainLayout from '../../layouts/main'
import SearchBar from '../../components/searchBar'
import TripCardList from '../../containers/tripCardList'
import { Outlet, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { TRIPS_LIST_SERVICE } from '../../services/trips/tripsList'
import { UseAuth } from '../../hooks/useAuth'

const FindTripPage = () => {
  const [search, setSearch] = useState('')
  const { getTokens } = UseAuth()
  const navigate = useNavigate()
  const currentTrip = JSON.parse(localStorage.getItem('user') || '{}')

  const { response, isLoading, isError } = useFetch({
    ...TRIPS_LIST_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens().access_token}`,
      'Content-Type': 'application/json'
    }
  })

  useEffect(() => {
    if (
      (currentTrip.currently_passenger && !isLoading) ||
      (response && response.some((trip) =>
        trip.offers?.some(
          (offer) => offer.passenger_id === currentTrip.id && offer.accepted
        )
      ))
    ) {
      navigate(`/find-trip/your-trip/${currentTrip.id}`)
      const userInfo = JSON.parse(localStorage.getItem('user') || '{}')
      localStorage.setItem(
        'user',
        JSON.stringify({ ...userInfo, currently_passenger: true })
      )
    }
  }, [isLoading, response])

  return (
    <MainLayout>
      {!currentTrip.currently_passenger && response && !isError && (
        <section className='trip-list'>
          <SearchBar value={search} onChange={(e) => setSearch(e)} />
          <h2>Viajes disponibles</h2>
          {!isLoading && <TripCardList data={response} />}
        </section>
      )}
      <Outlet />
      {isError && <>Modal</>}
    </MainLayout>
  )
}

export default FindTripPage
