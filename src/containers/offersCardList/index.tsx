import { Offer } from '../../config/types/trips'
import PassengerCard from '../../components/passengerCard'
import {
  ACCEPT_OFFER_SERVICE,
  REJECT_OFFER_SERVICE
} from '../../services/trips/acceptRejectOffer'
import useFetchMutation from '../../hooks/useFetchMutation'
import { UseAuth } from '../../hooks/useAuth'

type OffersCardListProps = {
  data: Offer[]
  refetch: () => void
}

const OffersCardList = ({ data, refetch }: OffersCardListProps) => {
  const { getTokens } = UseAuth()

  const { fetchService: acceptMutate } = useFetchMutation({
    ...ACCEPT_OFFER_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const { fetchService: rejectMutate } = useFetchMutation({
    ...REJECT_OFFER_SERVICE,
    headers: {
      Authorization: `Bearer ${getTokens()?.access_token}`
    }
  })

  const handleAccept = async (id: number) => {
    await acceptMutate(undefined, String(id)).then(() => refetch()).catch(() => undefined)
  }

  const handleReject = async (id: number) => {
    await rejectMutate(undefined, String(id)).then(() => refetch()).catch(() => undefined)
  }

  return (
    <div>
      <h3>Ofertas</h3>
      {data.filter((item) => !item.accepted).length === 0 && (
        <p>No tienes más ofertas para este viaje</p>
      )}
      {data.map((offer, index) =>
        offer.accepted ? (
          <></>
        ) : (
          <PassengerCard
            key={index}
            item={offer}
            hasActions
            onAccept={handleAccept}
            onReject={handleReject}
          />
        )
      )}
    </div>
  )
}

export default OffersCardList
