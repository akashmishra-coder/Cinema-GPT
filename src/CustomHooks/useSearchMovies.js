import { useDispatch } from "react-redux";
import { addGptSearchMovies } from "../utils/gptSlice";
import { useEffect } from "react";
import { options } from "../utils/consent";


function useSearchMovies(searchtext) {
 const dispatch = useDispatch();
 
 const handleSearchClick = async() => {
      const url = 'https://api.themoviedb.org/3/search/movie?query=' + searchtext + '&include_adult=false&language=en-US&page=1';
    const data = await fetch(url, options);
    const json  = await data.json();
    console.log(json.results);
    dispatch(addGptSearchMovies({movieName: searchtext, movieResults: json.results}));
   }
    useEffect(() => {   
        if(searchtext) handleSearchClick();
    }, [searchtext]);
}

export default useSearchMovies;