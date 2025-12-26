import { options } from "../utils/consent";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { url } from "../utils/consent";
import { useEffect } from "react";

const useFetchMovies = () => {
  const dispatch = useDispatch();

  const nowGetPlayingMovies = async () => {   

    const data = await fetch(url, options);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addMovies(json.results));
    };

  useEffect(() => {
    nowGetPlayingMovies();
  }, []);

};

export default useFetchMovies;
