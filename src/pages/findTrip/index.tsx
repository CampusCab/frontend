import './index.scss'

import { useState } from 'react'
import MainLayout from '../../layouts/main'
import SearchBar from '../../components/searchBar'
import TripCardList from '../../containers/tripCardList'
import { Outlet } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { TRIPS_LIST_SERVICE } from '../../services/tripsList'
import { UseAuth } from '../../hooks/useAuth'

const FindTripPage = () => {
  const { getTokens } = UseAuth()

  const { response, isLoading } = useFetch({
    ...TRIPS_LIST_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens().access_token}`,
      'Content-Type': 'application/json'
    }
  })
  const [hasTrip] = useState(false)

  const [search, setSearch] = useState('')
  return (
    <MainLayout>
      {!hasTrip && (
        <section className='trip-list'>
          <SearchBar value={search} onChange={(e) => setSearch(e)} />
          <h2>Viajes disponibles</h2>
          {!isLoading && <TripCardList data={response.trips} />}
        </section>
      )}
      <Outlet />
    </MainLayout>
  )
}

export default FindTripPage
