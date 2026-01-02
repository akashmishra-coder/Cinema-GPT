import React, { useEffect } from 'react'
import { options, Top_rated_Movie_url } from '../utils/consent';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useDispatch, useSelector } from 'react-redux';

function useUpcomingMovie() {
  const dispatch = useDispatch();
  const UpcomingMovies = useSelector((store) => store.movies.UpcomingMovies);
    const fetchUpcomingMovies = () => {
        fetch(Top_rated_Movie_url, options)
        .then((res) => res.json())
        .then((data) => dispatch(addUpcomingMovies(data.results)))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
      if(!UpcomingMovies) fetchUpcomingMovies();
    },[])
}

export default useUpcomingMovie