import React, { useState, useContext, Dispatch, SetStateAction } from 'react';

// Airbnb react date imports
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker } from 'react-dates';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { FilterContext } from '../../provider/FilterContext';

type focusedInputProps = 'startDate' | 'endDate' | null;

const DatePicker = () => {
  const { rentalDate, setRentalDate, furnished, city } = useContext(FilterContext);
  const [focusedInput, setFocusedInput] = useState<focusedInputProps>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const hasChosenCity = city !== 'Choose a city';

  return (
    <div className='p-6 rounded-b-lg flex items-center bg-white'>
      <FontAwesomeIcon icon={faCalendar} className='text-yellow-500 fa-lg mr-7' />
      {furnished === 'Furnished' ? (
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
          disabled={!hasChosenCity}
          noBorder
        />
      ) : (
        <SingleDatePicker
          date={rentalDate.startDate}
          onDateChange={date => setRentalDate({ ...rentalDate, startDate: date })}
          focused={isFocused}
          onFocusChange={({focused}) => setIsFocused(focused)}
          id="singleIdUnique"
          placeholder='Move-in'
          disabled={!hasChosenCity}
          noBorder
        />
      )}
    </div>
  );
}

export default DatePicker;
