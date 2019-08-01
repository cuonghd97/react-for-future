import React, { Component } from 'react'
import { AuthConsumer } from '../AuthContext'
import { Link } from 'react-router-dom'

const Login = () =>  {
  return(
    <div>
      <h3>Login</h3>
      <AuthConsumer>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username"/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password"/>

        </form>
      </AuthConsumer>
    </div>
  )
}

export default Login