import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Login } from './containers/Login'
import { Signup } from './containers/Signup'

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" render={(props) => <Login />} exact />
      <Route path="/signup" render={(props) => <Signup />} exact />
    </Switch>
  )
}

export default App
