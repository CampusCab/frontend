import React from 'react'
import { Passenger } from '../../config/types/trips'
import PassengerCard from '../../components/passengerCard'

type OffersCardListProps = {
  data: Passenger[]
}

const OffersCardList = ({ data }: OffersCardListProps) => {
  return (
    <div>
      <h3>Ofertas</h3>
      {data.map((passenger, index) => (
        <PassengerCard key={index} item={passenger} hasActions/>
      ))}
    </div>
  )
}

export default OffersCardList
