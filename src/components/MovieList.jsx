import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  
  return (
    <div className=" w-full px-3 md:px-5 box-border text-white ">
      <h1 className=" text-xl md:text-3xl py-2">{title}</h1>
      <div className=" flex flex-col w-full py-4  box-border overflow-x-scroll no-scrollbar ">
        <div className=" flex cursor-pointer ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie?.poster_path} title={movie?.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
