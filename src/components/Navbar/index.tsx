import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between sticky top-0 z-20 bg-white shadow py-2'>
      <h1 className='font-mono text-5xl py-4 px-4 hover:opacity-75 cursor-pointer'>RentMe</h1>
      <div className='flex items-center mx-4 font-bold text-gray-500'>
        <Link to={Routes.LandingPage} className='hover:opacity-75'>
          <span className='uppercase'>Find a rental</span>
        </Link>
        <Link to={Routes.LandingPage} className='mx-12 hover:opacity-75'>
          <span className='uppercase'>Living in rentme</span>
        </Link>
        <Link to={Routes.LandingPage} className='hover:opacity-75'>
          <button className='border-4 border-solid border-gray-500 rounded-full py-2 px-4 hover:opacity-75'>
            <span className='uppercase font-bold'>sign in</span>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
