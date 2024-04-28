import './index.scss'
import { useState } from 'react'
import { HideIcon } from '../icon'

type InputProps = {
  name: string
  label?: string
  placeholder?: string
  value: string
  type: string
  erroMessage?: string
  icon?: React.ReactNode
  onChange: (value: string) => void
}

export const Input = (props: InputProps) => {
  const [inputType, setInputType] = useState(props.type)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
    setInputType(showPassword ? 'password' : 'text')
  }

  return (
    <div className='input'>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <div className='input__field'>
        {props.icon}
        <input
          type={inputType}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
        />
        {props.type === 'password' && <HideIcon onClick={handleShowPassword} />}
      </div>
      {props.erroMessage && <p>{props.erroMessage}</p>}
    </div>
  )
}
