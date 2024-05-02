import './index.scss'
import React from 'react'

type SelectProps = {
  options: string[]
  value: string
  label?: string
  placeholder?: string
  icon?: React.ReactNode
  errorMessage?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  options,
  value,
  icon,
  label,
  placeholder,
  errorMessage,
  onChange
}: SelectProps) => {
  return (
    <div className='select'>
      {label && <label>{label}</label>}
      <div className='select__options'>
        {icon}
        <select value={value} onChange={onChange}>
          {placeholder && <option value=''>{placeholder}</option>}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  )
}

export default Select
