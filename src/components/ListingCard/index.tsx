import React from 'react';

interface ListingCardProps {
  image: string,
  desc: string,
  address: string,
  cost: string,
  beds: string, 
  bath: string,
  availableAt: string,
}

const ListingCard = ({image, desc, address, cost, beds, bath, availableAt}: ListingCardProps) => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-72 cursor-pointer'>
        <img src={image} alt={desc} className='w-full h-full'/>
      </div>
      <h1 className='font-bold text-xl'>{address}</h1>
      <p>{cost} {beds} beds, {bath} bath</p>
      <p className='font-semibold text-lg'>Available {availableAt}</p>
    </div>
  );
}

export default ListingCard;
