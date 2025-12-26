import React from 'react'

function TrailerInfo({title, overview}) {
  return (
    <div className=' w-screen aspect-video flex gap-3 flex-col pl-20 justify-center absolute text-white bg-linear-to-r from-black'>
        <h2 className=' text-4xl font-semibold '>{title}</h2>
        <p className=' w-1/4 text-sm'>{overview}</p>
        <div className=' flex gap-4 mt-5'>
            <button className=' bg-white text-black px-6 py-2 text-xl font-bold rounded-lg cursor-pointer hover:scale-105'><span >▶</span>Play</button>
            <button className=' bg-gray-500 text-white px-6 py-2 text-lg font-bold rounded-lg cursor-pointer hover:scale-105'>More Info</button>
        </div>
    </div>
  )
}

export default TrailerInfo;