import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './containers/Login';


const UnauthorizedLayout = () => (
  <div className="unauthorized-layout">
    {/*

    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...

    */}
    <Switch>
      <Route path="/auth/login" component={Login} />
      <Redirect to="/auth/login" />
    </Switch>
  </div>
)

export default UnauthorizedLayout
