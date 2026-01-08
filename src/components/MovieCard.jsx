import React, { useState } from 'react'
import {POSTER_CDN_URL} from '../utils/consent'
import MovieInfo from './MovieInfo';

function MovieCard({movie}) {
  const [movieinfo, setmovieinfo] = useState(false);

  const poster = movie?.poster_path;
  if(!poster) return null;

  const MovieInfoPage = () => {
    // Navigate to movie info page
    
    setmovieinfo(!movieinfo);
  }
  return (
    <div onClick={MovieInfoPage} className=' h-40 md:h-60 w-30 md:w-40 z-30 shrink-0  '>
        <img className= ' w-full px-2 transition hover:scale-105 active:scale-50' src={POSTER_CDN_URL + poster} alt="poster" />
        <div className=''>{movieinfo && <MovieInfo id={movie.id}  />}</div>
    </div>
  )
}

export default MovieCard