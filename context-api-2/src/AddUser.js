import React, { Component } from "react"
import { UserContext } from "./UserContext"

class AddUser extends Component {
  constructor() {
    super()

    this.state = {
      name: ""
    }
  }

  updateName = (e) => {
    // console.log(e.target.value)
    this.setState({
      name: e.target.value
    })
  }

  submitUser = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {

    return (
      <form onSubmit={this.submitUser}>
        <input
          type="text"
          name="name"
          onChange={this.updateName}
        />
        <button onClick={this.submitUser}>Submit</button>
      </form>
    )
  }
}


export default AddUser