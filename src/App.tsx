import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import TextInput from './components/TextInput'
import TextareaInput from './components/TextareaInput'
import { toast } from 'react-toastify'
import FormikErrorListener from './components/FormikErrorListener'
import { scrollToFirstError } from './scrollToFirstError'

interface FormFields {
  firstName: string
  lastName: string
  email: string
  age: string
  bio: string
}

const FORM_FIELDS: FormFields = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  age: 'age',
  bio: 'bio',
}

function App() {
  const initialValues: FormFields = {
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    bio: '',
  }

  function handleSubmit() {
    toast.success('Valid!')
  }

  const validationSchema = Yup.object({
    [FORM_FIELDS.firstName]: Yup.string().required('First name is required'),
    [FORM_FIELDS.lastName]: Yup.string().required('Last name is required'),
  })

  return (
    <main className="mx-auto my-6 max-w-2xl">
      <h1 className="mb-4 text-2xl font-bold">Scroll to first error</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikErrorListener onSubmitError={scrollToFirstError} />

          <TextInput label="First name *" name={FORM_FIELDS.firstName} />
          <TextInput label="Last name *" name={FORM_FIELDS.lastName} />
          <TextInput label="Email" name={FORM_FIELDS.email} />
          <TextInput label="Age" name={FORM_FIELDS.age} />
          <TextareaInput
            label="Bio"
            name={FORM_FIELDS.bio}
            rows={20}
            placeholder="Enter some details about you..."
          />

          <button
            type="submit"
            className="w-100 border bg-black px-3 py-2 text-white hover:opacity-75"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </main>
  )
}

export default App
