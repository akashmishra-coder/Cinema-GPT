import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { options } from '../utils/consent';
import { addTrailerVideos } from '../utils/movieSlice';

function useFetchTrailer(id) {
   const dispatch = useDispatch(); 
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const getTrailer = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const json = await data.json();
    // console.log(json);
    

    const filtered = json.results.filter((video) => video.type === "Trailer");
    const trailer = filtered.length ? filtered[0].key: json.results[0];
    dispatch(addTrailerVideos(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, [id]);

}

export default useFetchTrailer;