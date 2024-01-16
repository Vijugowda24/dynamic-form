import React, { useEffect, useState } from 'react'
import ValidationError from './ValidationError'

function DateInput({
  label,
  name,
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
      <input
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        className={`${error ? '' : 'withMargin'}`}
        onBlur={() => setTouched(true)}
      />
      {touched && error && <span className="errorMessage">{error}</span>}
    </>
  )
}

export default DateInput