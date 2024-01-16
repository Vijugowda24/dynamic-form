import React, { useEffect, useState } from 'react'
import ValidationError from './ValidationError'

function TextInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  validations,
  formSubmitted,
}) {
  const [touched, setTouched] = useState(false)

  const error = touched ? ValidationError(value, validations) : null
  const handleChange = (e) => {
    const { value } = e.target
    onChange(name, value)
  }

  const handleBlur = () => {
    setTouched(true)
  }

  useEffect(() => {
    if (formSubmitted) {
      setTouched(true)
    }
  }, [formSubmitted])

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={` ${error ? '' : 'withMargin'}`}
      />
      {touched && error && <span className="errorMessage">{error}</span>}
    </>
  )
}

export default TextInput
