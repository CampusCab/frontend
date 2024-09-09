import env from '../../../env'
import { FetchServiceParams } from '../../config/types/services'
import { User } from '../../config/types/user'

export type ServiceBody = {
  email: string
  password: string
}

export type ServiceResponse = User

export const LOGIN_SERVICE = <FetchServiceParams<ServiceBody, ServiceResponse, never>>{
  url: `${env.BACKEND_AUTH_URL}/login/`,
  method: 'POST'
}
