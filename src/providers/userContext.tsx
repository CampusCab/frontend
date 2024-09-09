import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { User } from '../config/types/user'

type UserContextType = {
  userInfo: User
  setUserInfo: (data: User) => void
}

// Create the user context
export const UserContext = createContext<UserContextType>({
  userInfo: { isLogged: false } as User,
  setUserInfo: () => {}
})

// Create a provider component to wrap your app

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [userInfo, setUserInfo] = useState<User>({} as User)

  useEffect(() => {
    const tokens = JSON.parse(localStorage.getItem('tokens') as string)
    if (tokens) {
      setUserInfo({ ...userInfo, isLogged: true })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetUserInfo = (data: User) => {
    setUserInfo(data)
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo: handleSetUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
