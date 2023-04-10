import React, { useEffect, useState } from 'react'
import { FormikErrors, useFormikContext } from 'formik'

interface Props {
  onSubmitError: (errors: FormikErrors<unknown>) => void
}

const FormikErrorListener: React.FC<Props> = ({ onSubmitError }) => {
  const formikContext = useFormikContext()
  const { isValidating, errors } = formikContext
  const [previousSubmitCount, setPreviousSubmitCount] = useState(
    formikContext.submitCount
  )
  const submitCount = formikContext.submitCount
  const isNewSubmission = submitCount > 0 && submitCount !== previousSubmitCount
  const hasErrors = Object.keys(errors).length > 0

  useEffect(() => {
    setPreviousSubmitCount(submitCount)
  }, [submitCount])

  useEffect(() => {
    if (isNewSubmission && !isValidating && hasErrors) {
      onSubmitError(errors)
      return
    }
  }, [previousSubmitCount, isValidating])

  return null
}

export default FormikErrorListener
