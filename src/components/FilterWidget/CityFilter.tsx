import React, { useState } from 'react';
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
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  return (
    <React.Fragment>
      <div className='bg-white py-6 flex justify-between px-6 border-b' onClick={() => setShowDropDown(prev => !prev)}>
        <div className='flex'>
          <FontAwesomeIcon icon={faMapMarkerAlt} className='text-yellow-500 fa-lg mr-8' />
          <p className='font-semibold text-lg'>Choose a city</p>
        </div>
        <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown} className='text-gray-200 fa-lg' />
      </div>
      <div className='z-20 bg-white'>
        {showDropDown && (
          cities.map(city => (
            <p
              className='pl-4 py-2 font-semibold cursor-pointer hover:text-yellow-500'
              onClick={() => alert('Set chosen city to global state and close drop down')}
              key={city.id}>
              {city.name}
            </p>
          ))
        )}
      </div>
    </React.Fragment>
  );
}

export default CityFilter;
