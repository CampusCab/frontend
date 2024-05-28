import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { Vehicle } from '../../config/types/trips'

export type ServiceResponse = {
  vehicles: Vehicle[]
}

export const MY_VEHICLES_SERVICE = <FetchServiceParams<never, ServiceResponse>>{
  url: `${env.BACKEND_VEHICLES_URL}`,
  method: 'GET'
}
