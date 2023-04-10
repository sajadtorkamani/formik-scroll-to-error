import React from 'react'
import { useField } from 'formik'

interface Props {
  name: string
  label?: string
  type?: string
}

const TextInput: React.FC<Props> = ({ name, label, ...props }) => {
  const [field, { touched, error }] = useField(name)
  const id = `field_${name}`

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="mb-0.5 block">
          {label}
        </label>
      )}

      <input
        {...field}
        {...props}
        id={id}
        className="w-full border px-2 py-1"
      />

      {touched && error && (
        <div className="mt-0.5 text-sm text-red-600" data-field-error={id}>
          {error}
        </div>
      )}
    </div>
  )
}

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
