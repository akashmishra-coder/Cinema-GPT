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
    <div className=' mt-28 md:mt-20'>
      <form onSubmit={(e)=> e.preventDefault()} 
      className=' flex justify-center p-3 mx-4 md:w-1/3 rounded-lg md:mx-auto bg-black'>
        <input type="text" ref={searchtext} className=' bg-zinc-500 px-3 w-full py-3 mr-2 rounded-md text-xl md:text-lg text-white placeholder:text-white' placeholder='What would you like to watch today?' />
        <button className=' px-6 py-2 bg-red-700 text-xl md:text-lg text-white rounded-lg cursor-pointer hover:bg-red-800'
        onClick={handleSearchClick}
        >Search</button>
      </form>
    </div>
  )
}

export default GptSearchBar