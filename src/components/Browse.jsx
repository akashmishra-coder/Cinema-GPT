import Headers from "./Header";
import useFetchMovies from "../CustomHooks/useFetchMovies";
import { useSelector } from "react-redux";
import TrailerInfo from "./TrailerInfo";
import BackgroundTrailer from "./BackgroundTrailer";
import SecondryContainer from "./SecondryContainer";
import usePopulerMovie from "../CustomHooks/usePopulerMovie";
import useTopRatedMovie from "../CustomHooks/useTopRatedMovie";
import useUpcomingMovie from "../CustomHooks/useUpcomingMovie";

const Browse = () => {
  useFetchMovies();
  usePopulerMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[16];
  const {original_title, overview, backdrop_path} = mainMovie;  

  return (
    <>
      <Headers />
      <div>
      <TrailerInfo title={original_title} overview={overview} backdrop_path={backdrop_path} />
      <BackgroundTrailer id={mainMovie.id} />
      </div>
      <SecondryContainer />
    </>
  );
};

export default Browse;
