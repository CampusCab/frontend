import { Passenger } from '../../config/types/trips'
import PassegnerCard from '../../components/passengerCard'

type PassengersCardListProps = {
  data: Passenger[]
}

const PassengersCardList = ({ data }: PassengersCardListProps) => {
  return (
    <div>
      <h3>Pasajeros</h3>
      {data.map((passenger, index) => (
        <PassegnerCard key={index} item={passenger} />
      ))}
    </div>
  )
}

export default PassengersCardList
