import React from 'react'
import { Link } from 'react-router-dom'

function Empty() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4'>
      <div className='text-center max-w-md'>
        {/* Film Strip Icon */}
        <div className='mb-8'>
          <svg className='w-24 h-24 mx-auto text-amber-500 opacity-50' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M7 4v16m10-16v16M3 8h18M3 16h18' />
          </svg>
        </div>

        {/* Title */}
        <h2 className='text-3xl font-bold text-white mb-4'>Nothing Here</h2>

        {/* Description */}
        <p className='text-gray-400 text-lg mb-8'>
          It looks like there's nothing to display right now. Try searching for movies or adjusting your filters.
        </p>

        {/* Decorative Element */}
        <div className='flex justify-center gap-2 mb-8'>
          <div className='w-2 h-2 bg-amber-500 rounded-full'></div>
          <div className='w-2 h-2 bg-amber-500 rounded-full opacity-50'></div>
          <div className='w-2 h-2 bg-amber-500 rounded-full opacity-25'></div>
        </div>

        {/* Button */}
       <Link to={"/browse"} className='bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105'>
          Go Back Home
       </Link>
      </div>
    </div>
  )
}

export default Empty