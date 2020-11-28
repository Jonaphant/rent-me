import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../utils/routes';
import { FilterContext } from '../../provider/FilterContext';

import CityFilter from './CityFilter';
import DatePicker from './DatePicker';

const FilterWidget = () => {
  const { isFurnished, setIsFurnished } = useContext(FilterContext);

  const onFurnishedClick = (furnished:boolean) => {
    if (setIsFurnished) {
      setIsFurnished(furnished);
    }
  }

  const furnishedButtonStyle = `uppercase flex-1 text-center cursor-pointer py-4`
  const furnishedStyle = `rounded-tl-lg ${furnishedButtonStyle} ${isFurnished ? 'text-white bg-gray-700' : 'text-gray-500 bg-gray-100'}`
  const unfurnishedStyle = `rounded-tr-lg ${furnishedButtonStyle} ${isFurnished ? 'text-gray-500 bg-gray-100' : 'text-white bg-gray-700'}`

  return (
    <React.Fragment>
      <div className='flex flex-col w-full border mb-8 rounded-lg border shadow'>
        <div className='flex w-full font-bold'>
          <div
            className={furnishedStyle}
            onClick={() => onFurnishedClick(true)}
          >  
            Furnished
          </div>
          <div
            className={unfurnishedStyle}
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
