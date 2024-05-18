import { useEffect, useState } from 'react'
import {
  FetchServiceParams,
  ServiceBody,
  ServiceError,
  ServiceResponse
} from '../config/types/services'

const useFetch = <
  B extends ServiceBody,
  R extends ServiceResponse,
  E extends ServiceError
>({
  url,
  method,
  headers,
  body
}: FetchServiceParams<B, R>) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState<E>(undefined as unknown as E)
  const [response, setResponse] = useState<R>(undefined as unknown as R)

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(url, {
          method: method,
          headers: headers || {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        if (!response.ok) {
          setIsError({
            type: 'service',
            status: response.status,
            message: response.statusText
          } as E)
          setIsLoading(false)
        }

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
    fetchService()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

return { isLoading, isError, response }
}
 
export default useFetch