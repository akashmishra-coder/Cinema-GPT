import React, { useEffect } from 'react'
import { options, Top_rated_Movie_url } from '../utils/consent';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

function useTopRatedMovie() {
  const dispatch = useDispatch();
 
  const TopRatedMovies = () =>{
    fetch(Top_rated_Movie_url, options)
    .then(res => res.json())
    .then(data => dispatch(addTopRatedMovies(data.results)))
    .catch(error => console.log(error)
    )
  }

  useEffect(()=>{
    TopRatedMovies();
  },[])

}

export default useTopRatedMovie