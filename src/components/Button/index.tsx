import React from 'react'

interface ButtonProps {
  label?: string
}

export const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, ...props }) => {
  return <button {...props}>{label}</button>
}
