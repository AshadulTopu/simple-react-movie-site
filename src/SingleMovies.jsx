import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { API_URL } from "./context"

function SingleMovies() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState('')
    const [isError, setIsError] = useState({show: false, msg: ''})

    const getMovies = async (url) => {
        try{
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            if(data.Response === "True"){
                setIsLoading(false)
                setMovies(data)
                console.log(data);
                setIsError({
                  show: false, 
                  msg: ''
              })
            }else{
                setIsLoading(true)
                setIsError({
                  show: true, 
                  msg: data.Error
              })
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
       let timerOut = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`)
        }, 800)
        return () => clearTimeout(timerOut)
    }, [id])

    if(isLoading){
      return <div className='loading'>
        <div className="loader">Loading...</div>
      </div>
    }
  
  return (
    <section className="movies-page">
      <div className="single-movie">
        <div className="single-movie_poster">
        <img src={movies.Poster} alt={movies.Title} />
        </div>
        <div className="single-movie-info">
        <h2>{movies.Title}</h2>
        <p>Year: {movies.Year}</p>
          <p>Plot: {movies.Plot}</p>
          <p>Director: {movies.Director}</p>
          <p>Actors: {movies.Actors}</p>
          <p>Genre: {movies.Genre}</p>
          <p>Language: {movies.Language}</p>
          <p>Awards: {movies.Awards}</p>
          <p>Metascore: {movies.Metascore}</p>
          <p>imdbRating: {movies.imdbRating}</p>
          <p>imdbVotes: {movies.imdbVotes}</p>
          <p>imdbID: {movies.imdbID}</p>

          <NavLink to={`/`}>Go Back</NavLink>
          </div>
      </div>
      <div className="error-card">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default SingleMovies
