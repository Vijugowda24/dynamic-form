import React, { useEffect, useState } from 'react'
import ValidationError from './ValidationError'

function SelectInput({
  label,
  name,
  options,
  value,
  onChange,
  validations,
  formSubmitted,
}) {
  const [touched, setTouched] = useState(false)

  const handleChange = (e) => {
    const { value } = e.target
    onChange(name, value)
  }
  const error = touched ? ValidationError(value, validations) : null
  useEffect(() => {
    if (formSubmitted) {
      setTouched(true)
    }
  }, [formSubmitted])

  return (
    <>
      <label>{label}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={` ${error ? '' : 'withMargin'}`}
        onBlur={() => setTouched(true)}
      >
        <option value=''>Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched && error && <span className="errorMessage">{error}</span>}
    </>
  )
}

export default SelectInput