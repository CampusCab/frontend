import { useEffect, useState } from 'react'
import {
  FetchServiceParams,
  ServiceBody,
  ServiceError,
  ServiceParams,
  ServiceResponse
} from '../config/types/services'

const useFetch = <
  B extends ServiceBody,
  R extends ServiceResponse,
  P extends ServiceParams,
  E extends ServiceError
>({
  url,
  method,
  headers,
  body
}: FetchServiceParams<B, R, P>) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState<E>(undefined as unknown as E)
  const [response, setResponse] = useState<R>(undefined as unknown as R)
  const [params, setParams] = useState<P>()

  const fetchService = async (params?: P) => {
    setParams(params)
    try {
      const response = await fetch(
        params ? `${url}/${params?.toString()}` : url,
        {
          method: method,
          headers: headers || {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        }
      )
      if (!response.ok) {
        setIsError({
          type: 'service',
          status: response.status,
          message: response.statusText
        } as E)
        setIsLoading(false)
      }
      setIsLoading(false)
      const json = await response.json()
      setResponse(json)
    } catch (error) {
      setIsError({
        type: 'service',
        status: 500,
        message: error
      } as E)
      setIsLoading(false)
    }
  }

  const refetch = () => {
    fetchService(params)
  }
  
  useEffect(() => {
    fetchService()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, isError, response, refetch }
}

export default useFetch
