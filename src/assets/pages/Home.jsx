import React from 'react'
import { Link } from 'react-router-dom'
import bacground from '../Fronted/bacground.mp4';
const Home = () => {
  return (
    <div className='relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center'>
      <video src={bacground}  autoPlay
        loop
        muted
        playsInline className='object-cover  w-full  bg-cover flex h-full absolute z-[-1]' type="video/mp4"></video>
      <div className='border flex flex-col p-20 gap-10 text-xl font-medium rounded-full relative w-[80%]'>
        <button className='rounded-full py-2 px-3 bg-green-300'><Link to={'/listReciep'}>List recipice</Link></button>
        <button className='rounded-full py-2 px-3 bg-gray-300'><Link to={'/CreateReciep'}>Create Recipce</Link></button>
      </div>
    </div>
  )
}

export default Home
