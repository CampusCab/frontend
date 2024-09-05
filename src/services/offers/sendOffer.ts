import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'

export type ServiceBody = {
  amount : number
}

export type ServiceResponse = string

export const SEND_OFFER = <FetchServiceParams<ServiceBody, ServiceResponse, string>>{
  url: `${env.BACKEND_TRIPS_URL}/offer`,
  method: 'POST'
}
