import { useEffect } from 'react'
import LoginForm from '../../containers/loginForm'
import LoginLayout from '../../layouts/login'
import { UseAuth } from '../../providers/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { login ,isLogged } = UseAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) navigate('/')
  }, [isLogged, navigate])

  return (
    <>
      <LoginLayout>
        <LoginForm login={login} />
      </LoginLayout>
    </>
  )
}

export default LoginPage
