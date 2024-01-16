import React from 'react'

function CheckboxInput({ label, name, options, value, onChange }) {
  const handleChange = (e) => {
    const { checked, value } = e.target
    onChange(name, checked ? value : null)
  }

  return (
    <>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value} className="checkboxStyle">
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={value && value.includes(option.value)}
            onChange={handleChange}
          />
          <span> {option.label}</span>
        </div>
      ))}
    </>
  )
}

export default CheckboxInput