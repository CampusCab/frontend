import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TConfirmRegisterForm } from '../../config/types/forms'
import { Input } from '../../components/ui/input'
import { Button } from '../../components/ui/button'

const ConfirmRegister = () => {
  const { control, handleSubmit, formState } = useForm<TConfirmRegisterForm>()
  const navigate = useNavigate()

  const validateCode = (data: TConfirmRegisterForm) => {
    const code = Object.values(data).join('')
    return code === '123456'
  }

  const handleOnSubmit = (data: TConfirmRegisterForm) => {
    validateCode(data)
    if (formState.isValid) {
      navigate('/')
    }
  }
  return (
    <section className='confirm-register'>
      <p>
        Ingresa el código que llegó <br />a tu correo institucional
      </p>
      <form
        onSubmit={handleSubmit((data) => handleOnSubmit(data))}
        className='confirm-register-form'
      >
        <div className='confirm-register-form__fields'>
          {[1, 2, 3, 4, 5, 6].map((char) => (
            <Controller
              key={char}
              control={control}
              name={`char${char}` as keyof TConfirmRegisterForm}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field, fieldState }) => (
                <Input
                  name={`char${char}`}
                  type='number'
                  value={String(field.value)}
                  erroMessage={fieldState.error?.message}
                  onChange={field.onChange}
                />
              )}
            />
          ))}
        </div>
        <Button type='submit' variant='secondary' className='submit-button'>
          Regístrate
        </Button>
      </form>
      <img src='/src/assets/banner.svg' alt='Campuscap banner' />
    </section>
  )
}

export default ConfirmRegister
