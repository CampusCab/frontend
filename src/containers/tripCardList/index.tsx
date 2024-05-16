import { TripInfo } from '../../config/types/trips'
import TripCard from '../../components/tripCard'

type TripCardListProps = {
  data: TripInfo[]
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
