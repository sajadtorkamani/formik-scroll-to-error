export function scrollToFirstError() {
  // Find the error message
  const firstErrorField =
    document.querySelector<HTMLElement>('[data-field-error]')
  if (!firstErrorField) {
    console.warn('Failed to find error field')
    return
  }

  const htmlId = firstErrorField.dataset.fieldError

  // Try finding the label for the field
  const label = document.querySelector(`[for="${htmlId}"]`)
  if (label) {
    label.scrollIntoView()
    return
  }

  // If no label could be found, scroll to the field itself
  firstErrorField.scrollIntoView()
}
