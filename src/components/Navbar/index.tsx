import React, { useState, useContext } from 'react';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';

import DropDown from '../DropDown';

import { FilterContext } from '../../provider/FilterContext';
import { FURNISHED, CITIES, NEIGHBORHOODS, BEDROOMS } from '../../utils/constants'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCouch, faCalendar } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  showFilterTools?: boolean,
}

type focusedInputProps = 'startDate' | 'endDate' | null;

const Navbar = ({ showFilterTools = false }: NavbarProps) => {
  const { city, setCity, furnished, setFurnished, rentalDate, setRentalDate } = useContext(FilterContext);

  const [focusedInput, setFocusedInput] = useState<focusedInputProps>(null);
  return (
    <div className='sticky top-0 z-20'>
      <nav className='w-full flex justify-between bg-white shadow py-1'>
        <Link
          to={Routes.LandingPage}
          className='font-mono text-5xl py-4 px-4 hover:opacity-75 cursor-pointer'>
          RentMe
        </Link>
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
      {showFilterTools && (
        <div className='w-full border-t border-b bg-white py-5'>
          <div className='w-full flex items-center'>
            <DropDown
              buttonIcon={faCouch}
              buttonState={furnished}
              setButtonState={setFurnished}
              options={FURNISHED}
              className='py-1 px-4 border-r'
            />
            <div className='flex items-center pl-4 border-r'>
              <FontAwesomeIcon icon={faCalendar} className='text-yellow-500 fa-lg mr-4' />
              <DateRangePicker
                startDate={rentalDate.startDate}
                startDateId='startIdUnique'
                endDate={rentalDate.endDate}
                endDateId='endIdUnique'
                onDatesChange={({ startDate, endDate }) => setRentalDate({ startDate: startDate, endDate: endDate })}
                focusedInput={focusedInput}
                onFocusChange={focused => setFocusedInput(focused)}
                startDatePlaceholderText='Move-in'
                endDatePlaceholderText='Move-out'
                noBorder
              />
            </div>
            <DropDown
              buttonIcon={faMapMarkerAlt}
              buttonState={city}
              setButtonState={setCity}
              options={CITIES}
              className='py-1 px-4 border-r'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
