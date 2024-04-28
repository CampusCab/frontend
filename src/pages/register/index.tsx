import { Outlet, useParams } from 'react-router-dom'

const RegisterPage = () => {
  const { id } = useParams()

  return (
    <>
      {!id && <div>RegisterPage</div>}
      <Outlet />
    </>
  )
}

export default RegisterPage
