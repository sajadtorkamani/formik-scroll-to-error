import React, { useEffect } from 'react'

const FormikEffect: React.FC = () => {
  useEffect(() => {
    console.log('FormikEffect mounted')
  }, [])

  return null
}

export default FormikEffect
