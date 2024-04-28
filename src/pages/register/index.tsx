import './index.scss'

import { Outlet, useParams } from 'react-router-dom'
import RegisterLayout from '../../layouts/register'
import RegisterForm from '../../containers/registerForm'

const RegisterPage = () => {
  const { id } = useParams()

  return (
    <>
      {!id && (
        <RegisterLayout>
          <h1 className='title'>Registro</h1>
          <RegisterForm />
        </RegisterLayout>
      )}
      <Outlet />
    </>
  )
}

export default RegisterPage
