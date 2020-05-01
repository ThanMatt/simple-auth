import React from 'react'
import { useForm } from 'react-hook-form'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { forgotPasswordSchema } from '../../utils/schemas'

interface Inputs {
  email: string
}

export const ForgotPassword: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<Inputs>({
    validationSchema: forgotPasswordSchema
  })

  return (
    <div className="container-center">
      <form
        className="form-container"
        onSubmit={handleSubmit((values: Inputs) => console.log(values))}
      >
        <div className="text-center py-5">
          <label className="font-bold text-gray-700 text-xl">
            Forgot Password
          </label>
        </div>
        <TextField
          inputRef={register}
          type="email"
          label="Enter your email to search for your account"
          name="email"
          error={errors?.email}
        />
        <div className="flex flex-col py-4 justify-between">
          <Button
            className="btn btn-blue w-full"
            type="submit"
            label="Search email"
          />

          <label className="text-sm text-gray-500 mt-5">
            <Link className="link" to="/">
              Back to login
            </Link>
          </label>
        </div>
      </form>
    </div>
  )
}
