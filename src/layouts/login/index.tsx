import React from 'react'
import SingleHeader from '../components/singleHeader'

type LoginLayoutProps = {
  children: React.ReactNode
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <SingleHeader />
      <main>{children}</main>
    </>
  )
}

export default LoginLayout
