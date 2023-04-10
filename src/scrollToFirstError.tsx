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

  // Try finding the invalid form field and autofocus it.
  const fieldElement = document.querySelector<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >(`[data-field="${inputId}"]`)
  const isFound =
    fieldElement &&
    (fieldElement instanceof HTMLInputElement ||
      fieldElement instanceof HTMLTextAreaElement ||
      fieldElement instanceof HTMLSelectElement)
  if (isFound) {
    fieldElement.focus()
    return
  }

  // We couldn't find the form field.Let's try to find the corresponding
  // field label and scroll to that.
  const label = document.querySelector(`label[for="${inputId}"]`)
  if (label) {
    label.scrollIntoView()
    return
  }

  // Failed to find the label. Let's scroll to the error message instead
  firstErrorMessage.scrollIntoView()
}
