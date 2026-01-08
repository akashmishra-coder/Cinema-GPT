import React from 'react'
import {PlayIcon} from 'lucide-react'

function TrailerInfo({title, overview}) {
  return (
    <div className=' w-screen aspect-video flex md:gap-3 flex-col md:pt-10 pt-20 pl-4 md:pl-15 box-border justify-center absolutetext-white bg-linear-to-r from-black'>
        <h2 className='text-2xl lg:text-4xl font-semibold '>{title}</h2>
        <p className=' hidden sm:block w-1/4 text-sm'>{overview}</p>
        <div className=' flex gap-4 pt-5'>
            <button className=' bg-white flex text-black px-3 md:px-6 py-2 text-lg md:text-xl font-bold rounded-lg cursor-pointer hover:scale-105'><PlayIcon /><div>Play</div> </button>
            <button className=' bg-gray-500 text-white px-3 md:px-6 py-2 text-lg md:text-xl font-bold rounded-lg cursor-pointer hover:scale-105'>More Info</button>
        </div>
    </div>
  )
}

export default TrailerInfo;