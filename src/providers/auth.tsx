import ENV from '../../env'
import { TLoginForm } from '../config/types/forms'
import { UserInfo } from '../config/types/user'

type TAuth = {
  isLogged: boolean
  register: (data: UserInfo) => Promise<{ email: string }>
  verify: (data: { email: string; verification_code: string }) => Promise<void>
  login: (data: TLoginForm) => Promise<void>
  logout: () => void
  getTokens: () => { access_token: string; refresh_token: string }
  data: UserInfo | null
}

const setTokens = (tokens: { access_token: string; refresh_token: string }) => {
  localStorage.setItem('access_token', tokens.access_token)
  localStorage.setItem('refresh_token', tokens.refresh_token)
}

export const UseAuth = () => {
  return {
    isLogged: false,
    register: (data: UserInfo) =>
      new Promise<{ email: string }>((resolve, reject) => {
        fetch(`${ENV.BACKEND_AUTH_URL}/register/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((response) => {
          if (!response.ok) {
            response
              .json()
              .then((data) => {
                reject({
                  type: 'service',
                  status: response.status,
                  message: response.statusText,
                  details: data
                })
              })
              .catch((err) =>
                reject({
                  type: 'cors',
                  status: response.status,
                  message: response.statusText,
                  details: err
                })
              )
          }
          else{
            response.json().then((data) => {
              resolve(data)
            })
          }
        })
      }),
    verify: async (data: { email: string; verification_code: string }) => {
      await fetch(`${ENV.BACKEND_AUTH_URL}/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => {
          return res.json()
        })
        .catch((err) => console.log(err))
    },
    login: async (data: TLoginForm) => {
      await fetch(`${ENV.BACKEND_AUTH_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(async (res) => {
          const { access_token, refresh_token } = await res.json()
          setTokens({ access_token, refresh_token })
        })
        .catch((err) => console.log(err))
    },
    logout: () => {},
    data: {},
    getTokens: () => {
      return {
        access_token: localStorage.getItem('access_token') || '',
        refresh_token: localStorage.getItem('refresh_token') || ''
      }
    }
  } as TAuth
}
