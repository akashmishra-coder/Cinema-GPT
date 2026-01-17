import React, { useState } from 'react'
import {POSTER_CDN_URL} from '../utils/consent'
import MovieInfo from './MovieInfo';
import { Heart, HeartOff } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addRemoveMovie, addSaveMovie } from '../utils/savedSlice';

function MovieCard({movie}) {
  const [movieinfo, setmovieinfo] = useState(false);
  const dispatch = useDispatch()

  const poster = movie?.poster_path;
  if(!poster) return null;

  const MovieInfoPage = () => {
    // Navigate to movie info page
    
    setmovieinfo(!movieinfo);
  }
  return (
    <div onClick={MovieInfoPage} className=' h-40 md:h-60 w-30 md:w-40 z-30 shrink-0 relative '>
        <button className=' absolute top-1 right-2 z-20 cursor-pointer ' onClick={()=> dispatch(addSaveMovie(movie))}><Heart /></button>
        <img className= ' w-full px-2 transition hover:scale-105 active:scale-50' src={POSTER_CDN_URL + poster} alt="poster" />
        <div className=''>{movieinfo && <MovieInfo id={movie.id}  />}</div>
    </div>
  )
}

export default MovieCard



export function MovieCardSave({movie}) {
  const [movieinfo, setmovieinfo] = useState(false);
  const dispatch = useDispatch()

  const poster = movie?.poster_path;
  if(!poster) return null;

  const MovieInfoPage = () => {
    // Navigate to movie info page
    
    setmovieinfo(!movieinfo);
  }
  return (
    <div onClick={MovieInfoPage} className=' h-40 md:h-60 w-30 md:w-40 z-30 shrink-0 relative '>
        <button className=' absolute top-1 right-2 z-20 cursor-pointer ' onClick={()=> dispatch(addRemoveMovie(movie))}><HeartOff color="#ff0000" /></button>
        <img className= ' w-full px-2 transition hover:scale-105 active:scale-50' src={POSTER_CDN_URL + poster} alt="poster" />
        <p>{movie.title}</p>
        <div className=''>{movieinfo && <MovieInfo id={movie.id}  />}</div>
    </div>
  )
}

