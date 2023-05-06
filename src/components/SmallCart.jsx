import React from 'react';

const SmallCart = ({ img, style, name }) => {
  return (
    <div className={`flex flex-row items-center p-2 mb-10 ${style}`}>
      <div className='w-8 mr-4'>
        <img src={img} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='flex items-center'>
        <p className='text-sm'>{name}</p>
      </div>
    </div>
  );
};

export default SmallCart;
