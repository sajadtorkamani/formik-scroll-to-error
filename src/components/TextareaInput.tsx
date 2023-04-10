import React, { TextareaHTMLAttributes } from 'react'
import { useField } from 'formik'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string
  label?: string
}

const TextareaInput: React.FC<Props> = ({
  name,
  label,
  rows = 4,
  ...props
}) => {
  const [field, { touched, error }] = useField(name)
  const id = `field_${name}`

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="mb-0.5 block">
          {label}
        </label>
      )}

      <textarea
        {...field}
        {...props}
        rows={rows}
        id={id}
        className="w-full border px-2 py-1"
      />

      {touched && error && (
        <div className="mt-0.5 text-sm text-red-600">{error}</div>
      )}
    </div>
  )
}

export default TextareaInput
