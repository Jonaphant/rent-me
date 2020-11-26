import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';

import Navbar from '../../components/Navbar';

import LandingImage from '../../images/landing.jpg';

const Landing = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className='pt-12 pb-48 flex justify-center w-full bg-green-50'>
        <div className='flex w-11/12 lg:w-11/12 xl:w-9/12'>
          <section className='flex flex-col w-5/12'>
            <div className='text-6xl mb-8'>
              <h1 className='mb-2'>Start Here,</h1>
              <h1>Live Anywhere</h1>
            </div>
            <p className='text-2xl mb-12'>
              RentMe is redefining apartment living with a large network of apartments at affordable prices. Renting has never been easier.
            </p>
            <div className='w-10/12'>
              {/* Filter widget */}
            </div>
          </section>
          <section className='w-7/12 flex justify-end'>
            <div className='mt-20 w-full max-w-3xl pl-12'>
              <img src={LandingImage} alt="person in apartment" />
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Landing;
