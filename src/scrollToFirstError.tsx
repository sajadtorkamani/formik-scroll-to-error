export function scrollToFirstError() {
  const firstErrorField = document.querySelector('[data-field-error]')
  if (!firstErrorField) {
    console.warn('Failed to find error field')
    return
  }

  firstErrorField.scrollIntoView()
}
