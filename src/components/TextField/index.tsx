import React from 'react'

interface TextFieldProps {
  label?: string
  error?: string
}

export const TextField: React.FC<
  TextFieldProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, error, ...inputProps }) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <input
        className={`form-input ${error && 'error-input mb-4'}`}
        {...inputProps}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}
