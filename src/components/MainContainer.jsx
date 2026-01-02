import { useSelector } from "react-redux";
import TrailerInfo from "./TrailerInfo";
import BackgroundTrailer from "./BackgroundTrailer";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[16];
  const { original_title, overview } = mainMovie;

  return (
    <div className=" pt-12 md:pt-0 bg-black">
      <TrailerInfo
        title={original_title}
        overview={overview}
      />
      <BackgroundTrailer id={mainMovie.id} />
    </div>
  );
}

export default MainContainer;
