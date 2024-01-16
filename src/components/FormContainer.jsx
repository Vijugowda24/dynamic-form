import React, { useState } from 'react'
import Form from './Form'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../store/EmployeeSlice'
import { useNavigate } from 'react-router-dom'
import ValidationError from './common/ValidationError'

function FormContainer({ formFields }) {
  const [formData, setFormData] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleFieldChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = () => {
    const errors = {}

    formFields.forEach((section) => {
      if (section.fields || section.formFields) {
        section.fields.forEach((field) => {
          const error = ValidationError(formData[field.name], field.validations)
          if (error) {
            errors[field.name] = error
          }
        })
      }
    })

    if (Object.keys(errors).length === 0) {
      dispatch(addEmployee(formData))
      navigate('/details')
    } else {
      setFormSubmitted(true)
    }
  }
  return (
    <div className="formContainer">
      <Form
        formField={formFields}
        formData={formData}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
        formSubmitted={formSubmitted}
      />
    </div>
  )
}

export default FormContainer;