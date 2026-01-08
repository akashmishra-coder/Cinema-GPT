import React from 'react'
import GptSuggestion from './GptSuggestion'
import GptSearchBar from "./GptSearchBar"

function GptSearch() {
  return (
    <div className=' pt-1 w-full h-screen bg-linear-to-t from-black to-gray-800'>
        <GptSearchBar />
        <GptSuggestion />
    </div>
  )
}

export default GptSearch