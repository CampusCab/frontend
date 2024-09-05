import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { TripInfo } from '../../config/types/trips'

export type ServiceResponse = {
  trips: TripInfo[]
}

export type Rating = {
    user: number
    stars: number
}

export type ServiceBody = Rating[]

export type RateBody = {
  stars: number
}

export const FINISH_TRIP_DRIVER_SERVICE = <
  FetchServiceParams<ServiceBody, ServiceResponse, string>
>{
  url: `${env.BACKEND_TRIPS_URL}/finish`,
  method: 'POST'
}

export const FINISH_TRIP_PASSENGER_SERVICE = <
  FetchServiceParams<RateBody, never, never>
>{
  url: `${env.BACKEND_TRIPS_URL}/rate`,
  method: 'POST'
}
