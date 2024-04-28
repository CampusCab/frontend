import { Controller, useForm } from 'react-hook-form'
import { TloginForm } from '../../config/types/forms'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button/input'
import { EmailIcon, LockIcon } from '../../components/ui/icon/input'

export const LoginForm = () => {
  const { control, handleSubmit } = useForm<TloginForm>()

  return (
    <>
      <div className='login-form'>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Controller
            control={control}
            name='email'
            render={({ field, fieldState }) => (
              <Input
                name='email'
                label='Correo institucional'
                type='email'
                icon={<EmailIcon />}
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
                label='Contraseña'
                type='password'
                icon={<LockIcon />}
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Button type='submit' variant='primary'>
            Iniciar sesión
          </Button>
        </form>
      </div>
      <div className='register-area'>
        <p>¿Aún no estás registrado?</p>
        <Button type='button' variant='secondary'>
          Registrarse
        </Button>
      </div>
    </>
  )
}
