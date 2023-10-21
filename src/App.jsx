import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import SingleMovies from "./SingleMovies"
import Error from "./Error"
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovies />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
