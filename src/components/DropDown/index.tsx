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
  buttonState: any,
  setButtonState: Dispatch<SetStateAction<any>>,
  options: Array<optionsProps>,
  className?: string,
}

const DropDown = ({
  buttonIcon,
  buttonState,
  setButtonState,
  options,
  className='' }: DropDownProps) => {

  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  
  const onOptionClick = (value) => {
    setButtonState(value);
    setShowDropDown(false);
  }

  return (
    <div className='relative'>
      <div
        className={`bg-white flex items-center justify-between cursor-pointer ${className}`}
        onClick={() => setShowDropDown(prev => !prev)}
      >
        <div className='flex items-center mr-4'>
          <FontAwesomeIcon icon={buttonIcon} className='text-yellow-500 fa-lg mr-8' />
          <p className='font-semibold text-lg'>{buttonState}</p>
        </div>
        <FontAwesomeIcon icon={showDropDown ? faChevronUp : faChevronDown} className='text-gray-200 fa-lg' />
      </div>
      {showDropDown && (
        <div className='z-20 bg-white absolute w-full border'>
          {options.map(option => (
            <p
              className='pl-4 py-2 font-semibold cursor-pointer hover:text-yellow-500'
              onClick={() => onOptionClick(option.value)}
              key={option.id}
            >
              {option.value}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDown
