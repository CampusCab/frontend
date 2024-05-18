import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { EmailIcon, LockIcon } from '../../components/ui/icon'
import { useNavigate } from 'react-router-dom'
import { TLoginForm } from '../../config/types/forms'

const LoginForm = ({ login }: { login: (data: TLoginForm) => void }) => {
  const { control, handleSubmit } = useForm<TLoginForm>()
  const navigate = useNavigate()

  const onSubmit = (data: TLoginForm) => {
    login(data)
  }

  return (
    <section className='login-form'>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className='login-form__fields'
      >
        <Controller
          control={control}
          name='email'
          defaultValue=''
          render={({ field, fieldState }) => (
            <Input
              name='email'
              placeholder='Correo institucional'
              type='email'
              icon={<EmailIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          defaultValue=''
          render={({ field, fieldState }) => (
            <Input
              name='password'
              placeholder='Contraseña'
              type='password'
              icon={<LockIcon style={{ width: '20px' }} />}
              value={field.value}
              errorMessage={fieldState.error?.message}
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
