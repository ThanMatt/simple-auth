import React from 'react'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signupSchema } from '../../utils/schemas'

interface Inputs {
  email: string
  password: string
}

export const Signup: React.FC = () => {
  const { handleSubmit, register, errors } = useForm<Inputs>({
    validationSchema: signupSchema
  })

  return (
    <div className="container-center">
      <form
        className="form-container"
        onSubmit={handleSubmit((values: Inputs) => console.log(values))}
      >
        <div className="text-center py-5">
          <label className="font-bold text-gray-700 text-xl">Register</label>
        </div>
        <TextField
          inputRef={register}
          type="text"
          label="Email Address"
          name="email"
          error={errors?.email}
        />
        <TextField
          inputRef={register}
          type="password"
          label="Password"
          name="password"
          error={errors?.password}
        />
        <div className="flex flex-col items-center py-4 justify-between">
          <Button
            className="btn btn-blue w-full"
            type="submit"
            label="Sign up"
          />

          <label className="text-sm text-gray-500 mt-5">
            Already have an account?{' '}
            <span>
              <Link className="link" to="/">
                Log in now
              </Link>
            </span>
          </label>
        </div>
      </form>
    </div>
  )
}
