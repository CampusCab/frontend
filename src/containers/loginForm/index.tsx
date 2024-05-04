import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { EmailIcon, LockIcon } from '../../components/ui/icon'
import { useNavigate } from 'react-router-dom'
import { TLoginForm } from '../../config/types/forms'

const LoginForm = () => {
  const { control, handleSubmit } = useForm<TLoginForm>()
  const navigate = useNavigate()

  return (
    <section className='login-form'>
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className='login-form__fields'
      >
        <Controller
          control={control}
          name='email'
          render={({ field, fieldState }) => (
            <Input
              name='email'
              placeholder='Correo institucional'
              type='email'
              icon={<EmailIcon style={{ width: '20px' }} />}
              value={field.value}
              erroMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field, fieldState }) => (
            <Input
              name='password'
              placeholder='Contraseña'
              type='password'
              icon={<LockIcon style={{ width: '20px' }} />}
              value={field.value}
              erroMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Button type='submit' variant='primary' className='submit-button'>
          Iniciar sesión
        </Button>
      </form>
      <div className='register-area'>
        <p>¿Aún no estás registrado?</p>
        <Button
          type='button'
          variant='secondary'
          className='register-button'
          onClick={() => navigate('/register')}
        >
          Regístrate
        </Button>
      </div>
    </section>
  )
}

export default LoginForm
