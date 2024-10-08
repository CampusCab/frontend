import './index.scss'
import { useState } from 'react'
import { HideIcon, ShowIcon } from '../icon'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  placeholder?: string
  value: string | number
  type: string
  errorMessage?: string
  icon?: React.ReactNode
  variant?: 'rounded' | 'default'
}

const Input = (props: InputProps) => {
  const [inputType, setInputType] = useState(props.type)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
    setInputType(showPassword ? 'password' : 'text')
  }

  return (
    <div className={`input ${props.variant}`}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <div className='input__field'>
        {props.icon}
        <input
          {...props}
          type={inputType}
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange && props.onChange(e)}
        />
        {props.type === 'password' && (
          <span onClick={handleShowPassword}>
            {showPassword ? (
              <ShowIcon style={{ width: '20px' }} />
            ) : (
              <HideIcon style={{ width: '20px' }} />
            )}
          </span>
        )}
      </div>
      {props.errorMessage && <p>{props.errorMessage}</p>}
    </div>
  )
}

export default Input
