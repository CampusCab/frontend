import { useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(false)
  const fetchService = async (body: B) => {
    try {
      setIsLoading(true)
      const response = await fetch(url, {
        method: method,
        headers: headers || {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if (!response.ok) {
        setIsLoading(false)
        return {
          isError: true,
          type: 'service',
          status: response.status,
          message: response.statusText // TODO: Solve this message from backend
        } as E
      }

      const json = await response.json()
      setIsLoading(false)
      return json
    } catch (error) {
      setIsLoading(false)
      return {
        type: 'service',
        status: 500,
        error: error,
        message: 'Internal Server Error'
      } as E
    }
  }
  return { fetchService, isLoading }
}

export default useFetchMutation
