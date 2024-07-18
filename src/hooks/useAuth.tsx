import useFetchMutation from './useFetchMutation'
import { LOGIN_SERVICE } from '../services/login'
import { TLoginForm } from '../config/types/forms'
import { useContext, useEffect } from 'react'
import { UserContext } from '../providers/userContext'
import { User } from '../config/types/user'
import { useNavigate } from 'react-router-dom'
import { usePopUp } from '../components/ui/popUp'

type TAuth = {
  logout: () => void
  login: (data: TLoginForm) => void
  getTokens: () => { access_token: string; refresh_token: string }
}

export const UseAuth = () => {
  const { fetchService } = useFetchMutation({ ...LOGIN_SERVICE })
  const { setUserInfo, userInfo } = useContext(UserContext)
  const navigate = useNavigate()
  const {addPopUp} = usePopUp()

  useEffect(() => {
    const tokens = getTokens()
    const user = localStorage.getItem('user')
    if (tokens.access_token && user) {
      setUserInfo({ ...(JSON.parse(user) as User), isLogged: true })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  }

  const setUserData = (data: User) => {
    setUserInfo({ ...data, isLogged: true })
    localStorage.setItem('user', JSON.stringify(data))
  }

  return {
    login: (data: TLoginForm) => {
      fetchService(data).then((response) => {
        if (!response?.isError) {
          setTokens(response.tokens.access_token, response.tokens.access_token)
          setUserData(response.user)
        } else {
          console.log(response)
          addPopUp('danger', 'Usuario o contraseña incorrectos')
        }
      })
    },
    logout: () => {
      localStorage.removeItem('tokens')
      localStorage.removeItem('user')
      setUserInfo({ ...userInfo, isLogged: false })
      navigate('/login')
    },
    getTokens: getTokens
  } as TAuth
}
