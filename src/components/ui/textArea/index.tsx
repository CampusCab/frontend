import './index.scss'
import { useState } from 'react'
import { HideIcon } from '../icon'

interface InputProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string
  placeholder?: string
  value: string
  erroMessage?: string
  icon?: React.ReactNode
  variant?: 'rounded' | 'default'
}

const TextArea = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={`text-area ${props.variant}`}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <div className='text-area__field'>
        {props.icon}
        <textarea
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange && props.onChange(e)}
        />
        {props.type === 'password' && <HideIcon onClick={handleShowPassword} />}
      </div>
      {props.erroMessage && <p>{props.erroMessage}</p>}
    </div>
  )
}

export default TextArea
