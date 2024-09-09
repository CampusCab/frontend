import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { TripInfo } from '../../config/types/trips'

export type ServiceResponse = TripInfo[]

export const TRIPS_LIST_SERVICE = <
  FetchServiceParams<never, ServiceResponse, never>
>{
  url: `${env.BACKEND_TRIPS_URL}/avaliable`,
  method: 'GET'
}
