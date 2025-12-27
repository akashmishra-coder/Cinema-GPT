import React, { useEffect } from 'react'
import { options, Top_rated_Movie_url } from '../utils/consent';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';

function useUpcomingMovie() {
  const dispatch = useDispatch();
    const fetchPopuler = () => {
        fetch(Top_rated_Movie_url, options)
        .then((res) => res.json())
        .then((data) => dispatch(addUpcomingMovies(data.results)))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        fetchPopuler();
    },[])
}

export default useUpcomingMovie