import React from "react";
import MovieCard from "./MovieCard";
import { Link} from "react-router-dom";

function MovieList({ title, movies }) {
  
  return (
    <div className=" w-screen px-3 md:px-5 box-border text-white ">
      <h1 className=" text-xl md:text-3xl py-2 capitalize">{title}</h1>
      <div className=" flex flex-col w-full py-4 box-border  ">
        <div className="flex cursor-pointer overflow-x-scroll no-scrollbar">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} title={movie?.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
