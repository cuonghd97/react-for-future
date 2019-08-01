import React, { Component } from 'react'

export const AuthContext = React.createContext()

export class AuthProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      isAuth: false
    }

    this.login = this.login.bind(this)
  }

  login = () => {
    this.setState({
      isAuth: true
    })
  }

  logout = () => {
    this.setState({
      isAuth: false
    })
  }

  render() {
    return(
      <AuthContext.Provider value={{
        isAuth: this.state.isAuth,
        login: this.login,
        logout: this.logout }}
      >
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}