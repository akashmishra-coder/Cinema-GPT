import React from 'react'
import { Link } from 'react-router-dom';
import { logo_Url } from '../utils/consent';
import BackgroundTrailer from './BackgroundTrailer';
import { useDispatch, useSelector } from 'react-redux';
import  { MovieCardSave } from './MovieCard';
import Empty from './Empty';
import { addClearAllMovie } from '../utils/savedSlice';

function SavedMovie() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.saveMovie.movieSaved);
  console.log(movies);
  
  
  return (
    <div className='bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen'>
      {/* Header */}
      <header className='sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-amber-500/20'>
        <div className='grid grid-cols-2 items-center py-3 px-4 md:px-8'>
          <div>
            <div className="flex items-center gap-2">
              <img src={logo_Url} alt="logo-image" className="w-10 md:w-12" />
              <p className="text-2xl md:text-3xl text-amber-500 font-bold drop-shadow-lg">
                Cinema GPT
              </p>
            </div>
          </div>
          <div className='flex justify-end items-center gap-3 md:gap-5'>
            <Link 
              to={"/browse"} 
              className='text-xs md:text-sm px-3 md:px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg'
            >
              Home
            </Link> 
            <button 
              className='text-xs md:text-sm px-3 md:px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold cursor-pointer transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg' 
              onClick={()=> dispatch(addClearAllMovie())}
            >
              Clear All
            </button>
          </div>
        </div>
      </header>

      {/* Background Trailer */}
      {movies.length !== 0 ? <BackgroundTrailer /> : <Empty />}

      {/* Title Section */}
      <div className='px-4 md:px-8 py-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-4xl md:text-5xl font-bold text-white'>
            My Saved <span className='text-amber-500'>Movies</span>
          </h1>
          <div className='bg-amber-500/20 backdrop-blur px-6 py-3 rounded-full border border-amber-500/40'>
            <span className='text-amber-400 font-bold text-lg'>{movies.length} saved</span>
          </div>
        </div>
        <p className='text-gray-400 mt-2'>Your collection of favorite movies</p>
      </div>

      {/* Movies Grid */}
      <main className='w-full px-4 md:px-8 pb-12'>
        {movies.length > 0 ? (
          <div className='flex flex-wrap gap-4 md:gap-3'>
            {movies.map((item) => (
              <div key={item.id} className='transform transition duration-300 hover:scale-105'>
                <MovieCardSave movie={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-gray-400 text-lg'>No saved movies yet. Start adding your favorites!</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default SavedMovie;