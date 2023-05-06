import React from 'react';

const SingleProduct = ({ imgUrl, stars, foodStyle, foodName, price }) => {
  return (
    <div className='flex flex-col justify-between items-center mb-10 md:mb-4'>
      <div className='flex w-[180px] h-[180px] justify-start mb-6'>
        <img src={imgUrl} alt='' className='w-full h-full object-cover' />
      </div>
      <div className='mb-10 md:mb-4'>
        <img src={stars} alt='' />
      </div>
      <h4 className='text-[#2A333E] font-poppins text-sm text-center mb-10 md:mb-4'>
        {foodStyle}
      </h4>
      <h1 className='text-[#2A333E] text-center text-xl font-bold leading-6 mb-10 md:mb-4'>
        {foodName}
      </h1>
      <button className='flex-1 px-5 py-2.5 bg-[#EA0000] text-sm rounded-xl text-[#F9F9F9] shadow-2xl outline-none mt-4'>Add to Cart <span className='ml-2'>{price}</span></button>
    </div>
  );
};

export default SingleProduct;
