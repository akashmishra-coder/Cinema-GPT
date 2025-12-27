import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function SecondryContainer() {
  const movie = useSelector(store => store.movie);
  
  return (
    <div className=' bg-black'>
      <div className=' -mt-50 pl-8 relative z-40'>
      <MovieList title={"Tranding Movies"} movies={movie?.nowPlayingMovies}/>
      <MovieList title={"Populer Movies"} movies={movie?.PopulerMovies}/>
      <MovieList title={"Top 20 Movies"} movies={movie.TopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movie.UpcomingMovies}/>
      <MovieList title={"Horrer Movies"} movies={movie?.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondryContainer

