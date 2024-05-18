import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TRegisterForm } from '../../config/types/forms'
import { EmailIcon, LockIcon, PhoneIcon } from '../../components/ui/icon'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { REGISTER_SERVICE } from '../../services/register'
import useFetchMutation from '../../hooks/useFetchMutation'

const RegisterForm = () => {
  const { fetchService } = useFetchMutation({ ...REGISTER_SERVICE })
  const { control, handleSubmit } = useForm<TRegisterForm>()
  const navigate = useNavigate()

  const handleOnSubmit = async (data: TRegisterForm) => {
    if (data.password === data.confirmPassword) {
      await fetchService({ ...data, gender: 'M' }).then((response) => { // Quitar genero
        if (!response?.isError) {
          navigate(`${data.email}/confirm`)
        } else {
          console.log(response)
        }
      })
    }
  }
  return (
    <section className='register-form'>
      <form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
        <div className='register-form__row register-form__row--group'>
          <Controller
            control={control}
            name='first_name'
            rules={{ required: 'Este campo es requerido' }}
            render={({ field, fieldState }) => (
              <Input
                name='firstName'
                placeholder='Nombre(s)'
                type='text'
                icon={<EmailIcon style={{ width: '20px' }} />}
                value={field.value}
                errorMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='last_name'
            render={({ field, fieldState }) => (
              <Input
                name='lastName'
                placeholder='Apellido(s)'
                type='text'
                value={field.value}
                errorMessage={fieldState.error?.message}
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
                icon={<EmailIcon style={{ width: '20px' }} />}
                value={field.value}
                errorMessage={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name='phone'
            defaultValue=''
            render={({ field, fieldState }) => (
              <Input
                name='phone'
                placeholder='Teléfono'
                type='tel'
                icon={<PhoneIcon style={{ width: '20px' }} />}
                value={String(field.value)}
                errorMessage={fieldState.error?.message}
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
                icon={<LockIcon style={{ width: '20px' }} />}
                value={field.value}
                errorMessage={fieldState.error?.message}
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
                icon={<LockIcon style={{ width: '20px' }} />}
                value={field.value}
                errorMessage={fieldState.error?.message}
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
