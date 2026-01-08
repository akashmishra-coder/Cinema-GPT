import { useSelector } from "react-redux";
import useFetchTrailer from "../CustomHooks/useFetchTrailer";
import { useState } from "react";
import {VolumeOff, Volume2} from 'lucide-react'


function BackgroundTrailer({id}) {
  const [ismute, setIsmute] = useState(true);
  const trailerVideos = useSelector((store) => store.movies?.trailerVideo);
  useFetchTrailer(id);
  
  return (
    <div className=" relative md:static" >
      <div className="h-screen w-screen aspect-video absolute z-10"></div>
      <iframe        
        className=' h-6/12 w-screen aspect-video z-0 '
        src={`https://www.youtube.com/embed/${trailerVideos}?si=o-8aal81ELGBNOwr?&autoplay=1${ismute ? "&mute=1": ''}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; "
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <button onClick={() => setIsmute(!ismute)} className=" rounded-full cursor-pointer p-2 z-50  bg-white absolute bottom-10 md:bottom-20 right-8 md:right-20 transition">{ismute ? <Volume2 />:<VolumeOff />}</button>
    </div>
  );
}

export default BackgroundTrailer

