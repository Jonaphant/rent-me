import React, { useState, useContext } from 'react';
import { FilterContext } from '../../provider/FilterContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

interface CityProps {
  name: string,
  id: number,
}

const cities: Array<CityProps> = [
  {
    name: 'Atlanta',
    id: 0,
  },
  {
    name: 'Baltimore',
    id: 1,
  },
  {
    name: 'Boston',
    id: 2,
  },
  {
    name: 'Dallas',
    id: 3,
  },
  {
    name: 'Forth Worth',
    id: 4,
  },
  {
    name: 'New York',
    id: 5,
  },
  {
    name: 'Oakland',
    id: 6,
  },
  {
    name: 'San Francisco',
    id: 7,
  },
  {
    name: 'San Jose',
    id: 8,
  }
]

const CityFilter = () => {
  const {city, setCity} = useContext(FilterContext);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onCityClick = (cityName: string) => {
    if (setCity) {
      setCity(cityName);
    }
    setShowDropDown(false);
  }

  return (
    <React.Fragment>
      <div className='bg-white p-6 flex items-center justify-between border-b cursor-pointer' onClick={() => setShowDropDown(prev => !prev)}>
        <div className='flex'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='text-yellow-500 fa-lg mr-8' />
          <p className='font-semibold text-lg'>{city}</p>
        </div>
        <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown} className='text-gray-200 fa-lg' />
      </div>
      <div className='z-20 bg-white'>
        {showDropDown && (
          cities.map(cityData => (
            <p
              className='pl-4 py-2 font-semibold cursor-pointer hover:text-yellow-500'
              onClick={() => onCityClick(cityData.name)}
              key={cityData.id}
            >
              {cityData.name}
            </p>
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default CityFilter;
