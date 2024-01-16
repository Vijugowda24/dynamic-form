import React from 'react'
import RenderField from './RenderField'

function Form({ formField, formData, onFieldChange, onSubmit, formSubmitted }) {
  return (
    <div className="formMain">
      {formField.map((section) => (
        <div key={section.label}>
          <h2 className="title">{section.title}</h2>
          {(section.fields || section.formFields) && (
            <>
              <fieldset className="groupElements">
                <legend className="sectionTitle">{section.label}</legend>
                {section.fields &&
                  section.fields.map((field) => (
                    <RenderField
                      key={field.name}
                      field={field}
                      formData={formData}
                      onFieldChange={onFieldChange}
                      formSubmitted={formSubmitted}
                    />
                  ))}
              </fieldset>
              {section.formFields &&
                section.formFields.map((field) => (
                  <fieldset key={field.label} className="groupElements">
                    <legend className="sectionTitle">{field.label}</legend>
                    {field.fields.map((subField) => (
                      <RenderField
                        key={subField.name}
                        field={subField}
                        formData={formData}
                        onFieldChange={onFieldChange}
                        formSubmitted={formSubmitted}
                      />
                    ))}
                  </fieldset>
                ))}
            </>
          )}
        </div>
      ))}
      <div className="btn">
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Form;