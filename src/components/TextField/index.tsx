import React from 'react'

interface Props {
  label?: string
  type: 'text' | 'email' | 'number' | 'password'
  error?: string
}

export const TextField: React.FC<Props> = ({ label, type, error }) => {
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`form-input ${error && 'error-input mb-4'}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  )
}
