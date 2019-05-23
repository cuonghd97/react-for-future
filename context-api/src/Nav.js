import React, { useContext } from "react"
import { MovieContext } from "./MovieContext"

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h2>Cuong</h2>
      <span>Count: {movies .length}</span>
    </div>
  )
}

export default Nav