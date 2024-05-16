type UserInfo = {
  id: string
  name: string
  email: string
  phone: string
  image: string
}

type TAuth = {
  isLogged: boolean
  login: () => void
  logout: () => void
  data: UserInfo | null
}

export const UseAuth = () => {
  return {
    isLogged: false,
    login: () => {},
    logout: () => {},
    data: {
      id: '1',
      name: 'John Doe',
      email: 'test@gmail.com',
      phone: '123456789',
      image: 'https://randomuser.me'
    }
  } as TAuth
}
