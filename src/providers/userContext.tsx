import React, { ReactNode, createContext, useState } from 'react'
import { User } from '../config/types/user'

type UserContextType = {
  userInfo: User
  setUserInfo: (data: User) => void
}

// Create the user context
export const UserContext = createContext<UserContextType>({
  userInfo: {} as User,
  setUserInfo: () => {}
})

// Create a provider component to wrap your app

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [userInfo, setUserInfo] = useState<User>({} as User)

  const handleSetUserInfo = (data: User) => {
    setUserInfo(data)
  }

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo: handleSetUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
