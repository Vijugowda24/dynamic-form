import React from 'react'
import TextInput from './common/TextInput'
import DateInput from './common/DateInput'
import RadioInput from './common/RadioInput'
import CheckboxInput from './common/CheckboxInput'
import SelectInput from './common/SelectInput'

function RenderField({ field, formData, onFieldChange, formSubmitted }) {
  switch (field.type) {
    case 'text':
      return (
        <div key={field.name} className="inputClass">
          <TextInput
            {...field}
            value={formData[field.name] || ''}
            onChange={onFieldChange}
            formSubmitted={formSubmitted}
          />
        </div>
      )
    case 'date':
      return (
        <div key={field.name} className="dateInputClass">
          <DateInput
            {...field}
            value={formData[field.name] || ''}
            onChange={onFieldChange}
            formSubmitted={formSubmitted}
          />
        </div>
      )
    case 'radio':
      return (
        <div key={field.name}>
          <RadioInput
            {...field}
            value={formData[field.name] || ''}
            onChange={onFieldChange}
            formSubmitted={formSubmitted}
          />
        </div>
      )
    case 'checkbox':
      return (
        <div key={field.name} className="checkboxInputClass">
          <CheckboxInput
            {...field}
            value={formData[field.name] || []}
            onChange={onFieldChange}
          />
        </div>
      )
    case 'select':
      return (
        <div key={field.name} className="selectInputClass">
          <SelectInput
            {...field}
            value={formData[field.name] || ''}
            onChange={onFieldChange}
            formSubmitted={formSubmitted}
          />
        </div>
      )
    default:
      return null
  }
}

export default RenderField
