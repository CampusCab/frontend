import { useEffect } from 'react'
import LoginForm from '../../containers/loginForm'
import LoginLayout from '../../layouts/login'
import { UseAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/ui/loader'

const LoginPage = () => {
  const { login, isLoading } = UseAuth()
  const userInfo = localStorage.getItem('user') 
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) navigate('/')
  }, [navigate, userInfo])

  return (
    <>
      <LoginLayout>
        <LoginForm login={login} />
      </LoginLayout>
      {isLoading && <Loader />}
    </>
  )
}

export default LoginPage
