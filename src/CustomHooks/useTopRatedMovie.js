import React, { useEffect } from 'react'
import { options, Top_rated_Movie_url } from '../utils/consent';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';

function useTopRatedMovie() {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const fetchTopRatedMovies = () =>{
    fetch(Top_rated_Movie_url, options)
    .then(res => res.json())
    .then(data => dispatch(addTopRatedMovies(data.results)))
    .catch(error => console.log(error)
    )
  }

  useEffect(()=>{
    if(!TopRatedMovies) fetchTopRatedMovies();
  },[])

}

export default useTopRatedMovie