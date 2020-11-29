import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';
import { FilterContext } from '../../provider/FilterContext';

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { CITIES } from '../../utils/constants'

import DropDown from '../DropDown';
import DatePicker from './DatePicker';

const FilterWidget = () => {
  const { isFurnished, setIsFurnished, city, setCity, rentalDate } = useContext(FilterContext);
  const hasChosenDates = ((isFurnished && rentalDate.startDate !== null && rentalDate.endDate !== null) ||
    (!isFurnished && rentalDate.startDate !== null));
  const isFormFilled = city !== 'Choose a city' && hasChosenDates;

  const furnishedButtonStyle = `uppercase flex-1 text-center cursor-pointer py-4`
  const furnishedStyle = `rounded-tl-lg ${furnishedButtonStyle}
    ${isFurnished ? 'text-white bg-gray-700' : 'text-gray-500 bg-gray-100'}`
  const unfurnishedStyle = `rounded-tr-lg ${furnishedButtonStyle}
  ${isFurnished ? 'text-gray-500 bg-gray-100' : 'text-white bg-gray-700'}`

  return (
    <React.Fragment>
      <div className='flex flex-col w-full border mb-8 rounded-lg border shadow'>
        <div className='flex w-full font-bold'>
          <div
            className={furnishedStyle}
            onClick={() => setIsFurnished(true)}
          >  
            Furnished
          </div>
          <div
            className={unfurnishedStyle}
            onClick={() => setIsFurnished(false)}
          >
            Unfurnished
          </div>
        </div>
        <div className='border-b'>
          <DropDown
            buttonIcon={faMapMarkerAlt}
            buttonState={city}
            setButtonState={setCity}
            options={CITIES}
          />
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
      <Link to={isFormFilled ? Routes.BrowseRentals : '#'}>
        <button
          className={`
            py-6 w-full bg-green-900 rounded-full font-bold
            text-xl focus:outline-none
            ${isFormFilled ? 'cursor-pointer text-white' : 'cursor-default text-gray-400'}
          `}
        >
          Search
        </button>
      </Link>
    </React.Fragment>
  );
}

export default FilterWidget;
