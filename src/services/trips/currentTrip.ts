import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { TripInfo } from '../../config/types/trips'

export type ServiceResponse = TripInfo

export const CURRENT_TRIP_SERVICE = <FetchServiceParams<never, ServiceResponse, never>>{
  url: `${env.BACKEND_TRIPS_URL}/current`,
  method: 'GET'
}
