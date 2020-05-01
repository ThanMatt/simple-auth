import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { loginSchema } from '../../utils/schemas'

interface Inputs {
  email: string
  password: string
}

export const Login: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<Inputs>({
    validationSchema: loginSchema
  })

  const submitForm = (values: Inputs): void => {
    console.log(values)
  }
  return (
    <div className="container-center">
      <form className="form-container" onSubmit={handleSubmit(submitForm)}>
        <div className="text-center py-5">
          <label className="font-bold text-gray-700 text-xl">Log in</label>
        </div>
        <TextField
          inputRef={register}
          name="email"
          type="text"
          label="Email Address"
          error={errors?.email}
        />
        <TextField
          inputRef={register}
          type="password"
          name="password"
          label="Password"
          error={errors?.password}
        />
        <Link className="link text-sm" to="/forgot">
          Forgot my password
        </Link>
        <div className="flex flex-col items-center py-4 justify-between">
          <Button
            className="btn btn-blue w-full"
            type="submit"
            label="Log in"
          />

          <label className="text-sm text-gray-500 mt-5">
            Don't have an account?{' '}
            <span>
              <Link className="link" to="/signup">
                Register now
              </Link>
            </span>
          </label>
        </div>
      </form>
    </div>
  )
}
