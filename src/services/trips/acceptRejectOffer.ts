import env from '../../../env'
import { TOfferTrip } from '../../config/types/forms'
import { FetchServiceParams } from '../../config/types/services'


export type ServiceResponse = TOfferTrip

export const ACCEPT_OFFER_SERVICE = <
  FetchServiceParams<never, ServiceResponse, string>
>{
  url: `${env.BACKEND_TRIPS_URL}/accept`,
  method: 'POST'
}

export const REJECT_OFFER_SERVICE = <
  FetchServiceParams<never, ServiceResponse, string>
>{
  url: `${env.BACKEND_TRIPS_URL}/reject`,
  method: 'POST'
}
