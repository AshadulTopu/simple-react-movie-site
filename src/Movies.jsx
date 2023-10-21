// import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalContext } from './context'

function Movies() {
  const { isLoading, movies, } = useGlobalContext()

  // console.log(isLoading);
  if(isLoading){
    return <div className='loading'>
      <div className="loader">Loading...</div>
    </div>
  }

  return(
    <section className="movies-page">
    <div className="grid grid-4-col">
      {movies.map((currentMovie, index) => {
        const { imdbID, Title, Poster, Year } = currentMovie
        const movieName = Title.substring(0, 20)
        return(
          <NavLink to={`movie/${imdbID}`} key={index}>
            <div className="card">
              <h2>{movieName.length >= 20 ? `${movieName}...` : movieName}</h2>
              <div>
                <img src={Poster} alt={Title} />
              </div>
              <p>{Year}</p>
            </div>
          </NavLink>
      )
      })}

    </div>
  </section>
  )
}

export default Movies
