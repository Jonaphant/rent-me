import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FilterContext } from '../../provider/FilterContext';

const DatePicker = () => {
  const {rentalDate, setRentalDate} = useContext(FilterContext);

  return (
    <div className='p-6 rounded-b-lg bg-white'>
      <div className='flex justify-between items-center'>
        <FontAwesomeIcon icon={faCalendar} className='text-yellow-500 fa-lg' />
        <button className='text-lg font-semibold focus:outline-none'>Move-in</button>
        <FontAwesomeIcon icon={faArrowRight} className='text-gray-200 fa-md' />
        <button className='text-lg font-semibold focus:outline-none'>Move-out</button>
      </div>
    </div>
  );
}

export default DatePicker;
