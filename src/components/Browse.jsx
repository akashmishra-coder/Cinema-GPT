import Headers from "./Header";
import useFetchMovies from "../CustomHooks/useFetchMovies";
import SecondryContainer from "./SecondryContainer";
import usePopulerMovie from "../CustomHooks/usePopulerMovie";
import useTopRatedMovie from "../CustomHooks/useTopRatedMovie";
import useUpcomingMovie from "../CustomHooks/useUpcomingMovie";
import MainContainer from "./MainContainer";
import GptSearch from "./GptFeature/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useFetchMovies();
  usePopulerMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  const showGptSearch = useSelector((store) => store.gpt.gptSearchView);

  return (
    <>
      <Headers />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
