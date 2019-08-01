import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

export default () => {
  const context = useContext(AuthContext)
  console.log(context)
  return(
    <div>
      <h2>Hello world</h2>
      <button onClick={ context.login } >Login</button>
      <button onClick={ context.logout } >Logout</button>
    </div>
  )
}