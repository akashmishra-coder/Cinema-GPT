import React, { use } from 'react'
import MovieList from '../MovieList'
import { useSelector } from 'react-redux';

function GptSuggestion() {
  const movies = useSelector((store) => store.gpt);
  return (
    <div>
      <h1 className=' text-2xl md:text-3xl font-medium text-center mt-5 md:mt-10 text-blue-700'>Suggestions: <span className=' capitalize text-red-700'>{movies.movieName}</span></h1>
      <MovieList movies={movies.gptSearchMovies}/>
    </div>
  )
}

export default GptSuggestion;
