import './index.scss'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { TVerifyRegisterForm } from '../../config/types/forms'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import useFetchMutation from '../../hooks/useFetchMutation'
import { VERIFY_REGISTRATION_SERVICE } from '../../services/accounts/verify'
import { useRef } from 'react'

const VerifyRegister = () => {
  const { control, handleSubmit } = useForm<TVerifyRegisterForm>()
  const { email } = useParams()
  const navigate = useNavigate()
  const { fetchService } = useFetchMutation({ ...VERIFY_REGISTRATION_SERVICE })

  const inputs  = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const handleOnSubmit = async (data: TVerifyRegisterForm) => {
    if (email) {
      const verification_code = Object.values(data).join('')
      await fetchService({ verification_code, email }).then((response) => {
        if (!response?.isError) {
          navigate(`/`)
        } else {
          console.log(response)
        }
      })
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
          {inputs.map((char, index) => (
            <Controller
              key={index}
              control={control}
              name={`char${index}` as keyof TVerifyRegisterForm}
              defaultValue=''
              rules={{
                required: 'Este campo es requerido',
              }}
              render={({ field, fieldState }) => (
                <Input
                  name={`char${index}`}
                  type='text'            
                  value={String(field.value)}
                  errorMessage={fieldState.error?.message}
                  onChange={field.onChange}
                  maxLength={1}
                  style={{ textTransform: 'uppercase' }}
                  {...char}
                />
              )}
            />
          ))}
        </div>
        <Button type='submit' variant='inverse' className='submit-button'>
          Regístrate
        </Button>
      </form>
      <img src='/assets/banner.svg' alt='CampusCab banner' />
    </section>
  )
}

export default VerifyRegister
