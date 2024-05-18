import env from "../../env";
import { FetchServiceParams } from "../config/types/services";

export type ServiceBody = {
    email: string
    verification_code: string
}

export type ServiceResponse = {
    message: string
}

export const VERIFY_REGISTRATION_SERVICE = <FetchServiceParams<ServiceBody, ServiceResponse>>{
    url: `${env.BACKEND_AUTH_URL}/verify/`,
    method: 'POST',
}