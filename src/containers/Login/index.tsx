import React from 'react'
import { TextField } from '../../components/TextField'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const Login: React.FC = () => {
  return (
    <div className="flex justify-center align-middle py-32 w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <TextField type="text" label="Username" />
        <TextField type="password" label="Password" />
        <div className="flex items-center justify-between">
          <Button className="btn btn-blue" type="submit" label="Log in" />

          <Link className="inline-block align-baseline link" to="/signup">
            Register now
          </Link>
        </div>
      </form>
    </div>
  )
}
