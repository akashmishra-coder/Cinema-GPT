import { useRef } from 'react'
import { options } from '../../utils/consent';
import { useDispatch } from 'react-redux';
import { addGptSearchMovies } from '../../utils/gptSlice';

function GptSearchBar() {
  const searchtext = useRef(null); 
  const dispatch = useDispatch();

  const handleSearchClick = async() => {
    console.log(searchtext.current.value);
    const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchtext.current.value + '&include_adult=false&language=en-US&page=1';
    const data = await fetch(url, options);
    const json  = await data.json();
    console.log(json.results);
    dispatch(addGptSearchMovies({movieName: searchtext.current.value, movieResults: json.results}));
   }
  return (
    <div className=' relative md:static z-30 md:w-full mt-10 md:mt-0 '>
      <form onSubmit={(e)=> e.preventDefault()} 
      className=' flex justify-center p-3 mx-2 md:w-6/12  md:mx-auto md:absolute md:left-[25%] md:top-3 z-40 md:z-40 bg-transparent'>
        <input type="text" ref={searchtext} className=' bg-zinc-500 px-3 w-full py-3 mr-2 rounded-md text-xl md:text-lg text-white placeholder:text-white' placeholder='What would you like to watch today?' />
        <button className=' px-6 py-2 bg-red-700 text-xl md:text-xl text-white rounded-lg cursor-pointer active:scale-95 transition active:bg-red-800'
        onClick={handleSearchClick}
        >Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar