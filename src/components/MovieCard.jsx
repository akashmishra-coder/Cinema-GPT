import React from 'react'
import {POSTER_CDN_URL} from '../utils/consent'

function MovieCard({poster}) {
  return (
    <>
        <img className= ' w-40 px-2 box-border' src={POSTER_CDN_URL + poster} alt="poster" />
    </>
  )
}

export default MovieCard