import env from '../../../env'
import { TOfferTrip } from '../../config/types/forms'
import { FetchServiceParams } from '../../config/types/services'


export type ServiceResponse = TOfferTrip

export const REMOVE_PASSENGER_SERVICE = <
  FetchServiceParams<never, ServiceResponse, string>
>{
  url: `${env.BACKEND_TRIPS_URL}/remove`,
  method: 'POST'
}
