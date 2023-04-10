import React, { useEffect, useState } from 'react'
import { FormikErrors, useFormikContext } from 'formik'

interface Props {
  onError: (errors: FormikErrors<unknown>) => void
}

// TODO: Make the logic easier to understand
const FormikSubmitErrorListener: React.FC<Props> = ({ onError }) => {
  const formikContext = useFormikContext()
  const { isValidating, errors } = formikContext
  const [previousSubmitCount, setPreviousSubmitCount] = useState(
    formikContext.submitCount
  )
  const submitCount = formikContext.submitCount
  const isNewSubmission = submitCount > 0 && submitCount !== previousSubmitCount
  const hasErrors = Object.keys(errors).length > 0

  useEffect(() => {
    // console.log({ submitCount, previousSubmitCount, isNewSubmission })
    setPreviousSubmitCount(submitCount)
  }, [submitCount])

  useEffect(() => {
    if (isNewSubmission && !isValidating && hasErrors) {
      onError(errors)
      return
    }
  }, [previousSubmitCount, isValidating])

  return null
}

export default FormikSubmitErrorListener
