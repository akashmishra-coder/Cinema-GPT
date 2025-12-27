
import React, { useEffect } from 'react'
import { options, Populer_Movie_url } from '../utils/consent'
import { useDispatch } from 'react-redux'
import { addPopulerMovies } from '../utils/movieSlice';

function usePopulerMovie() {
    const dispatch = useDispatch();
    const fetchPopuler = () => {
        fetch(Populer_Movie_url, options)
        .then((res) => res.json())
        .then((data) => dispatch(addPopulerMovies(data.results)))
        .catch((error) => console.log(error))
    }

    useEffect(()=>{
        fetchPopuler();
    },[])

}

export default usePopulerMovie