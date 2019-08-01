import React, { Component } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <AuthProvider>
          <Dashboard/>
        </AuthProvider>
      </div>
    )
  }
}

export default App