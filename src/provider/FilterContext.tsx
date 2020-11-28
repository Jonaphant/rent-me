import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface RentalDateProps {
  startDate: string,
  endDate: string,
}

interface FilterContextProps {
  isFurnished: boolean,
  setIsFurnished?: Dispatch<SetStateAction<boolean>>,
  city: string,
  setCity?: Dispatch<SetStateAction<string>>,
  rentalDate: RentalDateProps,
  setRentalDate?: Dispatch<SetStateAction<RentalDateProps>>,
}

const defaultData = {
  isFurnished: true,
  city: 'Choose a city',
  rentalDate: {
    startDate: '',
    endDate: '',
  }
}

export const FilterContext = createContext<FilterContextProps>(defaultData);

export const FilterProvider = (props: { children: React.ReactNode; }) => {
  const [isFurnished, setIsFurnished] = useState<boolean>(true);
  const [city, setCity] = useState<string>('Choose a city');
  const [rentalDate, setRentalDate] = useState({
    startDate: '',
    endDate: '',
  });

  return (
    <FilterContext.Provider value={{isFurnished, setIsFurnished, city, setCity, rentalDate, setRentalDate}}>
        {props.children}
    </FilterContext.Provider>
  )
}
