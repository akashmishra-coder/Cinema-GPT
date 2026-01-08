import BackgroundTrailer from './BackgroundTrailer';
import useFetchTrailer from '../CustomHooks/useFetchTrailer';

function MovieInfo({id}) {
  useFetchTrailer(id);

  return (
    <>
      {/* <BackgroundTrailer id={id} /> */}
    </>
  )
}

export default MovieInfo