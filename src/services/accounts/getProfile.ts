import env from "../../../env";
import { FetchServiceParams } from "../../config/types/services";
import { Profile } from "../../config/types/user";


export type ServiceResponse = Profile

export const GET_PROFILE_SERVICE = <FetchServiceParams<never, ServiceResponse, never>>{
    url: `${env.BACKEND_PROFILE_URL}`,
    method: 'GET',
}