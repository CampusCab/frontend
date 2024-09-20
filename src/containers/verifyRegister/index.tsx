import './index.scss'

import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../components/ui/button'
import useFetchMutation from '../../hooks/useFetchMutation'
import { VERIFY_REGISTRATION_SERVICE } from '../../services/accounts/verify'
import { useRef } from 'react'

type code = {
  code1: string
  code2: string
  code3: string
  code4: string
  code5: string
  code6: string
}

const VerifyRegister = () => {
  const { email } = useParams()
  const navigate = useNavigate()
  const { fetchService } = useFetchMutation({ ...VERIFY_REGISTRATION_SERVICE })

  const data: code = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  }

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ]

  const handleInputChange = (index: number) => {
    data[`code${index + 1}` as keyof code] = inputRefs[index].current!.value
    if (inputRefs[index].current!.value.length! >= 1) {
      if (inputRefs[index + 1]) {
        inputRefs[index + 1].current?.focus()
      }
    }
  }

  const handleOnSubmit = async () => {
    if (email) {
      const verification_code = Object.values(data).map((elm)=> elm.toUpperCase()).join('')
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
        onSubmit={() => {
          handleOnSubmit()
        }}
        className='confirm-register-form'
      >
        <div className='confirm-register-form__fields'>
          {inputRefs.map((ref, index) => (
            <input
              key={index}
              type='text'
              maxLength={1}
              ref={ref}
              onChange={() => handleInputChange(index)}
              style={{
                width: '35px',
                textAlign: 'center',
                textTransform: 'uppercase'
              }}
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
