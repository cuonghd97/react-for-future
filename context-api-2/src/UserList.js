import React, { Component, useContext, useState } from "react"
import User from "./User"
import { UserContext } from "./UserContext"

const UserList = () => {
  const [users, addUser] = useContext(UserContext)
  console.log(users)
  return (
    <ul>
      {
        users.map((user, index) => (
          <User key={index} name={user.name}/>
        ))
      }
    </ul>
  )
}

export default UserList