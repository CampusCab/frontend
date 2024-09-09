import { Offer } from '../../config/types/trips'
import PassegnerCard from '../../components/passengerCard'

type PassengersCardListProps = {
  data: Offer[]
}

const PassengersCardList = ({ data }: PassengersCardListProps) => {


  return (
    <div>
      {data.filter((item) => item.accepted && !item.finished).length !== 0 && (
        <>
          <h3>Pasajeros</h3>
          {data.map(
            (passenger, index) =>
              passenger.accepted && !passenger.finished  && (
                <PassegnerCard key={index} item={passenger} />
              )
          )}
        </>
      )}
    </div>
  )
}

export default PassengersCardList
