import * as Yup from 'yup'

const EMAIL_VALID = 'Please enter a valid email address'
const EMAIL_REQUIRED = 'Please enter your email address'
const PASSWORD_MIN = 'Your password must be at least 5 characters'
const PASSWORD_REQUIRED = 'Please enter your password'

export const loginSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED)
})

export const signupSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: Yup.string().min(5, PASSWORD_MIN).required(PASSWORD_REQUIRED)
})

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED)
})
