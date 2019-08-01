import React, { Component, createContext } from 'react'

const AuthContext = createContext()

class AuthProvider extends Component {
  constructor() {
    super()
    this.state = {
      isAuth: false
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login(data) {
    // setTimeout(() => this.setState({ isAuth: true }), 2000)
    console.log(data)
  }

  logout() {
    this.setState(() => this.state({ isAuth: false }))
  }

  render() {
    return(
      <AuthContext.Provider value={{
        isAuth: this.state.isAuth,
        login: this.login,
        logout: this.logout
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

const AuthConsumer = AuthContext.Consumer
export { AuthProvider, AuthConsumer }