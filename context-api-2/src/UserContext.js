import React, { Component } from "react"

export const UserContext = React.createContext()

export class UserProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [
        {
          name: "user 1",
          id: 1
        },
        {
          name: "user 2",
          id: 2
        },
        {
          name: "user 3",
          id: 3
        }
      ]
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser = (user) => {
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render() {
    return (
        <UserContext.Provider value={[this.state.users, this.addUser]}>
          {this.props.children}
        </UserContext.Provider>
    )
  }
}