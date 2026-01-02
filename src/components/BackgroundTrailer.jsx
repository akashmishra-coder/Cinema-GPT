import { useSelector } from "react-redux";
import useFetchTrailer from "../CustomHooks/useFetchTrailer";


function BackgroundTrailer({id}) {
  const trailerVideos = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer(id);

  return (
    <div >
      <iframe        
        className=' h-6/12 w-screen aspect-video '
        src={`https://www.youtube.com/embed/${trailerVideos}?si=o-8aal81ELGBNOwr?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default BackgroundTrailer