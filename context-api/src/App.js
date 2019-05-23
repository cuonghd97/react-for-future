import React, { Component } from "react"
import MovieList from "./MovieList"
import Nav from "./Nav"
import { MovieProvider } from "./MovieContext"
import AddMovie from "./AddMovie"

class App extends Component {
  render() {
    return(
      <MovieProvider>
        <div>
          <AddMovie/>
          <Nav/>
          <MovieList/>
      </div>
      </MovieProvider>
    )
  }
}

export default App