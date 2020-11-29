import React, { useState, Dispatch, SetStateAction } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface optionsProps {
  value: string,
  id: number,
}

interface DropDownProps {
  buttonIcon: IconProp,
  buttonState: string,
  setButtonState: Dispatch<SetStateAction<string>>,
  options: Array<optionsProps>,
}

const DropDown = ({
  buttonIcon,
  buttonState,
  setButtonState,
  options }: DropDownProps) => {

  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  
  const onOptionClick = (value) => {
    setButtonState(value);
    setShowDropDown(false);
  }

  return (
    <div className='relative'>
      <div className='bg-white p-6 flex items-center justify-between border-b cursor-pointer' onClick={() => setShowDropDown(prev => !prev)}>
        <div className='flex'>
          <FontAwesomeIcon icon={buttonIcon} className='text-yellow-500 fa-lg mr-8' />
          <p className='font-semibold text-lg'>{buttonState}</p>
        </div>
        <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown} className='text-gray-200 fa-lg' />
      </div>
      <div className='z-20 bg-white absolute w-full'>
        {showDropDown && (
          options.map(option => (
            <p
              className='pl-4 py-2 font-semibold cursor-pointer hover:text-yellow-500'
              onClick={() => onOptionClick(option.value)}
              key={option.id}
            >
              {option.value}
            </p>
          ))
        )}
      </div>
    </div>
  )
}

export default DropDown
