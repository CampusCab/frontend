import { useState } from 'react'
import {
  FetchServiceParams,
  ServiceBody,
  ServiceError,
  ServiceResponse,
  ServiceParams
} from '../config/types/services'
import { useNavigate } from 'react-router-dom'

const useFetchMutation = <
  B extends ServiceBody,
  R extends ServiceResponse,
  P extends ServiceParams,
  E extends ServiceError
>({
  url,
  method,
  headers
}: FetchServiceParams<B, R, P>) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const fetchService = async (body: B, params?: P) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        params ? `${url}/${params?.toString()}` : url,
        {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          body: JSON.stringify(body)
        }
      )
      if (!response.ok) {
        if(response.status === 401) {
          localStorage.removeItem('tokens')
          localStorage.removeItem('user')
          navigate('/login')
        }
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
