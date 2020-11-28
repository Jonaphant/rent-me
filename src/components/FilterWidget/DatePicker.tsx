import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FilterContext } from '../../provider/FilterContext';

const DatePicker = () => {
  const {rentalDate, setRentalDate, isFurnished} = useContext(FilterContext);

  return (
    <div className='p-6 rounded-b-lg bg-white'>
      <div className={`flex items-center ${isFurnished ? 'justify-between' : ' justify-start'}`}>
        <FontAwesomeIcon icon={faCalendar} className={`text-yellow-500 fa-lg ${!isFurnished && 'mr-7'}`} />
        <button className='text-lg font-semibold focus:outline-none'>Move-in</button>
        {isFurnished && (
          <React.Fragment>
            <FontAwesomeIcon icon={faArrowRight} className='text-gray-200 fa-md' />
            <button className='text-lg font-semibold focus:outline-none'>Move-out</button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default DatePicker;
