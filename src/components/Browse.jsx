import Headers from "./Header";
import useFetchMovies from "../CustomHooks/useFetchMovies";
import { useSelector } from "react-redux";
import TrailerInfo from "./TrailerInfo";
import BackgroundTrailer from "./BackgroundTrailer";

const Browse = () => {
  useFetchMovies();
  
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movies) return null;

  // console.log(movies[0]);
  const mainMovie = movies[2];

  const {original_title, overview, backdrop_path} = mainMovie;
  

  return (
    <>
      <Headers />
      <TrailerInfo title={original_title} overview={overview} backdrop_path={backdrop_path} />
      <BackgroundTrailer id={mainMovie.id} />
    </>
  );
};

export default Browse;
