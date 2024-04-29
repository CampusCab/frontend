import { TripsList } from '../../config/types/trips'
import Card from '../ui/card'

type TripCardListProps = {
  data: TripsList[]
}

const TripCardList = ({ data }: TripCardListProps) => {
  return (
    <>
      {data.map((item, index) => (
        <Card key={index} description={item.description}>
          <h3>
            {item.origin} - {item.destination}
          </h3>
          <p>
            {item.date} - {item.hour}
          </p>
          <p>
            Conductor: {item.driver.firstName} {item.driver.lastName}
          </p>
          <p>Disponibles: {item.availableSeats}</p>
        </Card>
      ))}
    </>
  )
}

export default TripCardList
