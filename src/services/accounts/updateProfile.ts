import env from "../../../env";
import { FetchServiceParams } from "../../config/types/services";
import { Profile } from "../../config/types/user";

export type ServiceBody = Profile

export type ServiceResponse = Profile

export const UPDATE_PROFILE = <FetchServiceParams<ServiceBody, ServiceResponse, never>>{
    url: `${env.BACKEND_PROFILE_URL}/update/`,
    method: 'POST',
}