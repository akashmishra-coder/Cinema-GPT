import { useSelector } from "react-redux";
import useFetchTrailer from "../CustomHooks/useFetchTrailer";


function BackgroundTrailer({id}) {
  const trailerVideos = useSelector((store) => store.movie?.trailerVideo);
  useFetchTrailer(id)


  return (
    <div >
      <iframe
        
        className=' w-screen aspect-video bg-center'
        src={`https://www.youtube.com/embed/${trailerVideos}?si=o-8aal81ELGBNOwr?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default BackgroundTrailer