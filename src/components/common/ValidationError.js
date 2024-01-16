function ValidationError(value, validations) {
  if (
    validations &&
    validations.isRequired &&
    (!value || value.trim() === '')
  ) {
    return 'This field is required'
  }

  if (validations && validations.pattern) {
    const pattern = new RegExp(validations.pattern)
    if (!pattern.test(value)) {
      return 'Invalid input'
    }
  }

  return null
}

export default ValidationError