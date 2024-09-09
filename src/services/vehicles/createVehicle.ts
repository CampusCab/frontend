import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { Vehicle } from '../../config/types/trips'

export type ServiceBody = Vehicle

export type ServiceResponse = {
  vehicles: Vehicle
}

export const CREATE_VEHICLE_SERVICE = <
  FetchServiceParams<ServiceBody, ServiceResponse, never>
>{
  url: `${env.BACKEND_VEHICLES_URL}/create`,
  method: 'POST'
}
