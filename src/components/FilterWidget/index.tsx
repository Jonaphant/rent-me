import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';
import { FilterContext } from '../../provider/FilterContext';

import CityFilter from './CityFilter';
import DatePicker from './DatePicker';

const FilterWidget = () => {
  const { setIsFurnished } = useContext(FilterContext);

  const onFurnishedClick = (furnished:boolean) => {
    if (setIsFurnished) {
      setIsFurnished(furnished);
    }
  }

  return (
    <React.Fragment>
      <div className='flex flex-col w-full border mb-8 rounded-lg border shadow'>
        <div className='flex w-full font-bold'>
          <div
            className='uppercase flex-1 text-center bg-gray-700 text-white py-4 rounded-tl-lg cursor-pointer'
            onClick={() => onFurnishedClick(true)}
          >  
            Furnished
          </div>
          <div
            className='uppercase flex-1 text-center bg-gray-100 py-4 rounded-tr-lg text-gray-500 cursor-pointer'
            onClick={() => onFurnishedClick(false)}
          >
            Unfurnished
          </div>
        </div>
        <div>
          <CityFilter />
        </div>
        <div>
          <DatePicker />
        </div>
      </div>
      <Link to={Routes.BrowseRentals}>
        <button className='py-6 w-full bg-green-900 rounded-full font-bold text-xl text-gray-400'>
          Search
        </button>
      </Link>
    </React.Fragment>
  );
}

export default FilterWidget;
