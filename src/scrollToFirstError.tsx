export function scrollToFirstError() {
  // Find the error message node
  const firstErrorMessage =
    document.querySelector<HTMLElement>('[data-field-error]')

  // Can't find the error message
  if (!firstErrorMessage) {
    console.warn('Failed to find error field')
    return
  }

  const inputId = firstErrorMessage.dataset.fieldError

  // Try finding the label for the field
  const label = document.querySelector(`[for="${inputId}"]`)
  if (label) {
    label.scrollIntoView()
    return
  }

  // If no label could be found, scroll to the field itself
  firstErrorMessage.scrollIntoView()
}
