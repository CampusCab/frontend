import { Outlet, useParams } from 'react-router-dom'
import RegisterLayout from '../../layouts/register'
import RegisterForm from '../../containers/registerForm'

const RegisterPage = () => {
  const { id } = useParams()

  return (
    <>
      {!id && (
        <RegisterLayout>
          <h2>Registro</h2>
          <RegisterForm />
        </RegisterLayout>
      )}
      <Outlet />
    </>
  )
}

export default RegisterPage
