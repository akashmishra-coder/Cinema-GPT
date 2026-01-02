import React from 'react'

function Error() {
  return (
    <div className=' h-screen flex flex-col gap-2 justify-center items-center text-4xl bg-black text-white'>
        <h2>Oops!!</h2>
        <p className=' text-2xl'>Somthing went wrong?</p>
        <div className=' border-2 bg-white text-black rounded-xl cursor-pointer px-4 py-2 mt-2'>Retry</div>
    </div>
  )
}

export default Error