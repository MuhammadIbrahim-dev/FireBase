import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='border flex flex-col p-20 gap-10 text-xl font-medium'>
        <button className='py-2 px-3 bg-green-300'><Link to={'/listReciep'}>List recipice</Link></button>
        <button className='py-2 px-3 bg-gray-300'><Link to={'/CreateReciep'}>Create Recipce</Link></button>
      </div>
    </div>
  )
}

export default Home
