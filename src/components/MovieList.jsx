import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  return (
    <div className=" w-full px-5 box-border text-white ">
      <h1 className=" text-3xl py-2">{title}</h1>
      <div className=" flex flex-col w-full py-5  box-border overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
        <div className=" flex cursor-pointer ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
