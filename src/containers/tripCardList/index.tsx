import { TripsList } from '../../config/types/trips'
import TripCard from '../../components/tripCard'

type TripCardListProps = {
  data: TripsList[]
}

const TripCardList = ({ data }: TripCardListProps) => {
  return (
    <>
      {data.map((item, index) => (
        <TripCard key={index} item={item}/>
      ))}
    </>
  )
}

export default TripCardList
