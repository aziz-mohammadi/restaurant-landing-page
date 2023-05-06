import React from 'react';
import BestSellerCard from '../components/BestSellerCard';
import { dish1, dish2, dish3, dish4, dish5, dish6, stars4, Decore } from '../images';
const BestSellers = () => {
  return (
    <div className='relative flex flex-col justify-center items-center px-8 md:px-16 my-10 font-poppins'>
      <div className='absolute top-2 -left-10'>
        <img
          src={require('../images/image33.png')}
          alt=''
          className='w-20 object-cover blur-[3px]'
        />
      </div>
      <h4 className='text-[#2A333E] font-bold text-xl leading-7 text-center uppercase tracking-[0.02em]'>
        Popular Menu
      </h4>
      <h1 className='text-[60px] text-[#EA0000] font-extrabold leading-[60px] -tracking-[0.08em] text-center'>
        <span className='font-abh'>
          Amazing Food Served <br /> With Delicacy
        </span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 px-8 md:px-16 '>
        <BestSellerCard
          food={dish1}
          stars={stars4}
          title={'Dishim with Fries and Sause'}
          price={'$7.10'}
        />
        <BestSellerCard
          food={dish2}
          stars={stars4}
          title={'Chicken Hot Wings'}
          price={'$6.40'}
        />
        <BestSellerCard
          food={dish3}
          stars={stars4}
          title={'Samosas with Green Chatni'}
          price={'$4.80'}
        />
        <BestSellerCard
          food={dish4}
          stars={stars4}
          title={'Sweet Sawaiyan'}
          price={'$5.10'}
        />
        <BestSellerCard
          food={dish5}
          stars={stars4}
          title={'Fried Raw Fish'}
          price={'$3.60'}
        />
        <BestSellerCard
          food={dish6}
          stars={stars4}
          title={'Brakefast with Half Fried Egg'}
          price={'$6.40'}
        />
      </div>
      <div className='absolute top-[52%] right-14 w-10 h-10 hidden md:flex'>
          <img src={Decore} alt="" className='w-full h-full object-cover' />
      </div>
      <button className='flex items-center justify-center px-4 py-2.5 bg-[#EA0000] rounded-[10px] text-white text-center mt-4'>
        See All Menu{' '}
        <div className='flex items-center justify-center w-6 h-6 bg-white text-[#EA0000] rounded-lg mx-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fill-rule='evenodd'
              d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default BestSellers;
