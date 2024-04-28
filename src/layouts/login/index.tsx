import React from 'react'
import SingleHeader from '../components/singleHeader'

export type LoginLayoutProps = {
  children: React.ReactNode
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <>
      <SingleHeader />
      <main style={{height: '100%', display: 'flex'}}>{children}</main>
    </>
  )
}

export default LoginLayout
