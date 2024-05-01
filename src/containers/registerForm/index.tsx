import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TRegisterForm } from '../../config/types/forms'
import { Input } from '../../components/ui/input'
import { EmailIcon, LockIcon } from '../../components/ui/icon'
import { Button } from '../../components/ui/button'

const RegisterForm = () => {
  const { control, handleSubmit, formState } = useForm<TRegisterForm>()
  const navigate = useNavigate()

  const handleOnSubmit = (data: TRegisterForm) => {
    if (formState.isValid && data.password === data.confirmPassword) {
      navigate('ID1/confirm')
    }
  }
  return (
    <section className='register-form'>
      <form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
        <div className='register-form__row register-form__row--group'>
          <Controller
            control={control}
            name='firstName'
            rules={{ required: 'Este campo es requerido' }}
            render={({ field, fieldState }) => (
              <Input
                name='firstName'
                placeholder='Nombre(s)'
                type='text'
                icon={<EmailIcon />}
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='lastName'
            render={({ field, fieldState }) => (
              <Input
                name='lastName'
                placeholder='Apellido(s)'
                type='text'
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className='register-form__row'>
          <Controller
            control={control}
            name='email'
            render={({ field, fieldState }) => (
              <Input
                name='email'
                placeholder='Correo institucional'
                type='email'
                icon={<EmailIcon style={{}} />}
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='phone'
            render={({ field, fieldState }) => (
              <Input
                name='phone'
                placeholder='Teléfono'
                type='number'
                icon={<EmailIcon style={{}} />}
                value={String(field.value)}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className='register-form__row'>
          <Controller
            control={control}
            name='password'
            render={({ field, fieldState }) => (
              <Input
                name='password'
                placeholder='Contraseña'
                type='password'
                icon={<LockIcon />}
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='confirmPassword'
            render={({ field, fieldState }) => (
              <Input
                name='confirmPassword'
                placeholder='Confirma tu contraseña'
                type='password'
                icon={<LockIcon />}
                value={field.value}
                erroMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
        </div>
        <div className='register-form__actions'>
          <Button type='submit' variant='primary' className='register-button'>
            Regístrate
          </Button>
          <Button
            type='button'
            variant='secondary'
            className='cancel-button'
            onClick={() => navigate('/login')}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </section>
  )
}

export default RegisterForm
