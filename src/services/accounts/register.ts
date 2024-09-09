import env from "../../../env";
import { FetchServiceParams } from "../../config/types/services";
import { RegisterInfo } from "../../config/types/user";

export type ServiceBody = RegisterInfo

export type ServiceResponse = {
    message: string
}

export const REGISTER_SERVICE = <FetchServiceParams<ServiceBody, ServiceResponse>>{
    url: `${env.BACKEND_AUTH_URL}/register/`,
    method: 'POST',
}