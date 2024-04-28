import React from 'react'

type LoginLayoutProps = {
  children: React.ReactNode
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
