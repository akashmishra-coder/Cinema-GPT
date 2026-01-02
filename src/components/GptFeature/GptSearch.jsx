import React from 'react'
import GptSuggestion from './GptSuggestion'
import GptSearchBar from "./GptSearchBar"

function GptSearch() {
  return (
    <div className=' w-full h-screen bg-linear-to-t from-black'>
        <GptSearchBar />
        <GptSuggestion />
    </div>
  )
}

export default GptSearch