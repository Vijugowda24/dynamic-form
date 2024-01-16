import React, { useEffect, useState } from 'react'
import ValidationError from './ValidationError'

function RadioInput({
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
      <div className="radioInputClass">
        <label>{label}</label>
        {options.map((option) => (
          <div key={option.value} className="radioBtnClass">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              onBlur={() => setTouched(true)}
            />
            <span> {option.label} </span>
          </div>
        ))}
      </div>
      <div>
        {touched && error && <span className="errorMessage">{error}</span>}
      </div>
    </>
  )
}

export default RadioInput;