import React, { Component } from "react"
import UserList from "./UserList"
import Count from "./Count"
import AddUser from "./AddUser"
import { UserProvider } from "./UserContext"

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div>
          <div>Hello world</div>
          <AddUser/>
          <Count />
          <UserList />
        </div>
      </UserProvider>
    )
  }
}

export default App