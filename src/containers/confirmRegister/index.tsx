import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { TConfirmRegisterForm } from '../../config/types/forms'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import { TRegisterContext } from '../../config/contexts/register'

const ConfirmRegister = () => {
  const context = useOutletContext<TRegisterContext>()
  const { control, handleSubmit, formState } = useForm<TConfirmRegisterForm>()
  const { email } = useParams()
  const navigate = useNavigate()

  const handleOnSubmit = (data: TConfirmRegisterForm) => {
    if (formState.isValid && email) {
      const code = Object.values(data).join('')
      context
        .verify({ email: email, verification_code: code })
        .finally(() => navigate('/'))
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
      <img src='/assets/banner.svg' alt='CampusCab banner' />
    </section>
  )
}

export default ConfirmRegister
