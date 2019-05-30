import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import ProtectedRoute from './components/ProtectedRoute'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AuthProvider>
            <Header />
            <Switch>
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <Route path="/" component={Landing} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    )
  }
}

export default App