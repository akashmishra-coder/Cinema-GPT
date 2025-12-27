import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function SecondryContainer() {
  const movie = useSelector(store => store.movie?.nowPlayingMovies)
  console.log(movie);
  
  return (
    <div className=' bg-black'>
      <div className=' -mt-50 pl-8 relative z-40'>
      <MovieList title={"Tranding"} movies={movie}/>
      <MovieList title={"Populer"} movies={movie}/>
      <MovieList title={"Top 20"} movies={movie}/>
      <MovieList title={"Horrer"} movies={movie}/>
      <MovieList title={"Action Movies"} movies={movie}/>
      </div>
    </div>
  )
}

export default SecondryContainer