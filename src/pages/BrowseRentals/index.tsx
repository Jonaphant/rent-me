import React, { useEffect, useState, useContext } from 'react';

import { FilterContext } from '../../provider/FilterContext';
import { getImages } from '../../utils/index';
import { GOOGLE_MAPS_KEY } from '../../config/index';

import Navbar from '../../components/Navbar';
import ListingCard from '../../components/ListingCard';

import GoogleMapReact from 'google-map-react';

const BrowseRentals = () => {
  const { city } = useContext(FilterContext);
  const [images, setImages] = useState([]);
  const defaultMapProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  }

  const handleImages = async () => {
    let imageData = await getImages();
    setImages(imageData.results);
  }

  useEffect(() => {
    handleImages();
  }, []);

  return (
    <div>
      <Navbar showFilterTools />
      <div className='max-w-screen-2xl flex flex-col mx-auto'>
        <div className='flex mt-16'>
          <section className='w-7/12'>
            <div className='flex justify-between items-start mb-6'>
              <p className='uppercase text-gray-400 font-semibold'>
                Furnished apartments in {city !== 'Choose a city' ? city : 'RentMe'}
              </p>
              <select name="" id="" className='focus:outline-none py-3 pl-5 pr-7 shadow-lg rounded'>
                <option value="Relavance">Relavance</option>
                <option value="Property (a-z)">Property (a-z)</option>
                <option value="Availability">Availability</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Special Offers">Special Offers</option>
              </select>
            </div>
            <div className='grid gap-9 grid-cols-2'>
              {images.map(image => (
                <ListingCard
                  image={image.urls.small}
                  desc={image.alt_description}
                  address='Dummy address'
                  cost='Dummy cost'
                  beds='2'
                  bath='3'
                  availableAt='random Date'
                />
              ))}
            </div>
          </section>
          <section className='w-5/12 ml-12'>
            <div className='mb-12'>
              <button>Maps</button>
            </div>
            <div className='h-screen w-full'>
              <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
                defaultCenter={defaultMapProps.center}
                defaultZoom={defaultMapProps.zoom}
              >
              </GoogleMapReact>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BrowseRentals;
