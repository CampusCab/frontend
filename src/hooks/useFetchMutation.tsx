import {
  FetchServiceParams,
  ServiceBody,
  ServiceError,
  ServiceResponse
} from '../config/types/services'

const useFetchMutation = <
  B extends ServiceBody,
  R extends ServiceResponse,
  E extends ServiceError
>({
  url,
  method,
  headers
}: FetchServiceParams<B, R>) => {
  const fetchService = async (body: B) => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: headers || {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (!response.ok) {
        return {
          isError: true,
          type: 'service',
          status: response.status,
          message: response.statusText // TODO: Solve this message from backend
        } as E
      }

      const json = await response.json()
      return json
    } catch (error) {
      return {
        type: 'service',
        status: 500,
        error: error,
        message: 'Internal Server Error'
      } as E
    }
  }
  return { fetchService }
}

export default useFetchMutation
