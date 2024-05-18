import useFetchMutation from './useFetchMutation'
import { LOGIN_SERVICE } from '../services/login'
import { TLoginForm } from '../config/types/forms'
import { useContext } from 'react'
import { UserContext } from '../providers/userContext'

type TAuth = {
  logout: () => void
  login: (data: TLoginForm) => void
  getTokens: () => { access_token: string; refresh_token: string }
}

export const UseAuth = () => {
  const { fetchService } = useFetchMutation({ ...LOGIN_SERVICE })
  const { setUserInfo, userInfo } = useContext(UserContext)

  const getTokens = () => {
    const tokens = JSON.parse(localStorage.getItem('tokens') as string)
    if (!tokens) {
      return {
        access_token: undefined,
        refresh_token: undefined
      }
    }
    return {
      access_token: JSON.parse(localStorage.getItem('tokens') as string)
        .access_token,
      refresh_token: JSON.parse(localStorage.getItem('tokens') as string)
        .refresh_token
    }
  }
  const setTokens = (access_token: string, refresh_token: string) => {
    localStorage.setItem(
      'tokens',
      JSON.stringify({ access_token, refresh_token })
    )
    setUserInfo({ ...userInfo, isLogged: true })
  }

  return {
    login: (data: TLoginForm) => {
      fetchService(data).then((response) => {
        if (!response?.isError) {
          setTokens(response.tokens.access_token, response.tokens.access_token)
        } else {
          console.log(response)
        }
      })
    },
    logout: () => {},
    getTokens: getTokens
  } as TAuth
}
