import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { Now_Playing_Movie_url, options } from "../utils/consent";
import { useEffect } from "react";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {   

    const data = await fetch(Now_Playing_Movie_url, options);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addMovies(json.results));
    };

  useEffect(() => {
    nowPlayingMovies();
  }, []);

};

export default useFetchMovies;
