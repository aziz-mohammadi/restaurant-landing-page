import React from 'react';

const BestSellerCard = ({ food, stars, title, price }) => {
  return (
    <div className='flex flex-col mb-10 md:mb-4 border-[1.2px] border-[#EFEFEF] rounded-3xl px-8'>
      <div className='flex justify-center items-center self-center w-[185px] h-[185px] pt-4 text-center'>
        <img src={food} alt='' className='w-full object-cover' />
      </div>
      <div className='mt-6 mb-2 self-start'>
        <img src={stars} alt='' />
      </div>
      <h2 className='text-[#2A333E] font-semibold leading-7 self-start'>
        {title}
      </h2>
      <h4 className='self-start'>
        Lorem Ipsum Lorem Ipsum is simply and dummy text of the printing.
      </h4>
      <div className='flex justify-between items-center py-2'>
        <p className='text-xl text-[#2A333E]'>{price}</p>
        <div className='flex justify-center items-center'>
          <button className='flex items-center justify-center mr-2 w-8 h-8 bg-[#EA0000] rounded-xl'>
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.4141 2.17527L7.99975 2.90734L8.5854 2.17527C8.64683 2.09849 8.68782 2.04418 8.72009 2.00143C8.7692 1.93635 8.7981 1.89806 8.84808 1.84808C10.3122 0.383973 12.6873 0.383973 14.1514 1.84808C15.6132 3.30982 15.6155 5.67964 14.1585 7.14432L7.99975 12.9676L1.841 7.14432C0.383977 5.67965 0.386338 3.30982 1.84808 1.84808C3.31219 0.383973 5.68731 0.383973 7.15142 1.84808C7.2014 1.89806 7.2303 1.93635 7.27942 2.00143C7.31168 2.04418 7.35267 2.09849 7.4141 2.17527Z" stroke="white" stroke-width="1.5"/>
            </svg>
          </button>
          <button className='flex items-center justify-center w-8 h-8 bg-[#2A333E] rounded-xl text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
