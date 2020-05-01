import React, { LegacyRef } from 'react'
import { FieldError } from 'react-hook-form'

interface TextFieldProps {
  label?: string
  error?: FieldError
  inputRef?: LegacyRef<HTMLInputElement>
}

export const TextField: React.FC<
  TextFieldProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, error, inputRef, ...inputProps }) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <input
        ref={inputRef}
        className={`form-input ${error && 'error-input mb-4'}`}
        {...inputProps}
      />
      {error?.message && <p className="error-message">{error?.message}</p>}
    </div>
  )
}
