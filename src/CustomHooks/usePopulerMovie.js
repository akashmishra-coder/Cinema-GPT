
import React, { use, useEffect } from 'react'
import { options, Populer_Movie_url } from '../utils/consent'
import { useDispatch, useSelector } from 'react-redux'
import { addPopulerMovies } from '../utils/movieSlice';

function usePopulerMovie() {
    const dispatch = useDispatch();
    const populerMovies = useSelector((store) => store.movies.PopulerMovies);
    const fetchPopuler = () => {
        fetch(Populer_Movie_url, options)
        .then((res) => res.json())
        .then((data) => dispatch(addPopulerMovies(data.results)))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
       if(!populerMovies) fetchPopuler();
    },[])

}

export default usePopulerMovie