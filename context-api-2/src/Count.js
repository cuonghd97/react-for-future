import React, { useContext } from "react"
import { UserContext } from "./UserContext"

const Count = () => {
  const users = useContext(UserContext)
  return (
    <div>
      Have {users.length} user(s)
    </div>
  )
}

export default Count