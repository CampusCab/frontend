import { useContext, useEffect } from 'react'
import LoginForm from '../../containers/loginForm'
import LoginLayout from '../../layouts/login'
import { UseAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../providers/userContext'

const LoginPage = () => {
  const { login } = UseAuth()
  const { userInfo } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo.isLogged) navigate('/')
  }, [navigate, userInfo.isLogged])

  return (
    <>
      <LoginLayout>
        <LoginForm login={login} />
      </LoginLayout>
    </>
  )
}

export default LoginPage
