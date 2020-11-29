import moment from 'moment';
import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface RentalDateProps {
  startDate: moment.Moment | null,
  endDate: moment.Moment | null,
}

interface FilterContextProps {
  furnished: string,
  setFurnished?: Dispatch<SetStateAction<string>>,
  city: string,
  setCity?: Dispatch<SetStateAction<string>>,
  neighborhood: string,
  setNeighborhood?: Dispatch<SetStateAction<string>>,
  bedrooms: string,
  setBedrooms?: Dispatch<SetStateAction<string>>,
  rentalDate: RentalDateProps,
  setRentalDate?: Dispatch<SetStateAction<RentalDateProps>>,
}

const defaultData = {
  furnished: 'Furnished',
  city: 'Choose a city',
  neighborhood: 'Neighborhoods',
  bedrooms: 'Bedrooms',
  rentalDate: {
    startDate: null,
    endDate: null,
  }
}

export const FilterContext = createContext<FilterContextProps>(defaultData);

export const FilterProvider = (props: { children: React.ReactNode; }) => {
  const [furnished, setFurnished] = useState('Furnished');
  const [city, setCity] = useState<string>('Choose a city');
  const [neighborhood, setNeighborhood] = useState<string>('Neighborhoods');
  const [bedrooms, setBedrooms] = useState<string>('Bedrooms');
  const [rentalDate, setRentalDate] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <FilterContext.Provider
      value={{
        furnished, setFurnished,
        city, setCity,
        rentalDate, setRentalDate,
        neighborhood, setNeighborhood,
        bedrooms, setBedrooms
      }}
    >
        {props.children}
    </FilterContext.Provider>
  )
}
