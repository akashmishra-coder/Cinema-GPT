import React from 'react'
import { logo_Url } from '../utils/consent'

const Header = () => {
  return (
    <div className=' w-full p-4 pl-20 flex items-center'>
        <img src={logo_Url} alt="logo-image" className=' w-20 ' />
        <p className=' text-shadow-2xs text-shadow-white ml-2 text-5xl text-red-500  font-(family-name:--chewy-regular)'>Cinema Gpt</p>  
    </div>
  )
}

export default Header