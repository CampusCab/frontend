import env from '../../../env'
import { TOfferTrip } from '../../config/types/forms'
import { FetchServiceParams } from '../../config/types/services'

export type ServiceBody = {
  vehicle: number
  origin: string
  destination: string
  start_time: string
  description?: string
}

export type ServiceResponse = TOfferTrip

export const CREATE_TRIPS = <
  FetchServiceParams<ServiceBody, ServiceResponse, never>
>{
  url: `${env.BACKEND_TRIPS_URL}/create`,
  method: 'POST'
}
