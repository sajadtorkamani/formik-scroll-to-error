export function scrollToFirstError() {
  // Try finding the first error message
  const firstErrorMessage =
    document.querySelector<HTMLElement>('[data-field-error]')

  // If we can't find it, log a warning and don't do anything else
  if (!firstErrorMessage) {
    console.warn('Failed to find error field')
    return
  }

  const inputId = firstErrorMessage.dataset.fieldError

  // We found the error message. Let's try to find the corresponding field label
  // and scroll to it
  const label = document.querySelector(`[for="${inputId}"]`)
  if (label) {
    label.scrollIntoView()
    return
  }

  // Failed to find the label. Let's scroll to the error message instead
  firstErrorMessage.scrollIntoView()
}
