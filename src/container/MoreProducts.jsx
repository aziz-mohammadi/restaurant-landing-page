import React from 'react';
import { SmallCart } from '../components';
import { MaskGroup1, pizza, desserts, desi, burger, bike, coffee, Decor } from '../images';

const MoreProducts = () => {
  return (
    <div
      className='flex flex-col md:flex-row mt-4 lg:py-12 font-poppins px-8 md:px-16'
      id='more_products'
    >
      <div className='relative hidden md:flex flex-row justify-between items-center w-1/3 mr-10'>
        <div className='flex flex-row flex-wrap md:flex-col'>
          <SmallCart
            img={MaskGroup1}
            style={'bg-[#EA0000] text-white rounded-xl'}
            name={'Coffee'}
          />
          <SmallCart img={burger} style={'text-[#2A333E]'} name={'Fast Food'} />
          <SmallCart img={pizza} style={'text-[#2A333E]'} name={'Pizza'} />
          <SmallCart img={desi} style={'text-[#2A333E]'} name={'Desi Menu'} />
          <SmallCart
            img={desserts}
            style={'text-[#2A333E]'}
            name={'Desserts'}
          />
        </div>
        {/* <div className='hidden md:flex  absolute top-0 right-0 w-[3px] h-10 bg-[#2A333E]'></div> */}
        <div className='hidden md:flex w-[3.65px] h-full bg-[#EA0000] opacity-5'></div>
      </div>

      <div className='relative w-full md:w-2/3 bg-[rgba(255,239,239,0.99)] rounded-[30px]'>
        <div className='absolute top-4 left-4 flex items-center z-100'>
          <div className='w-4 h-4 rounded-full bg-[#FF5829] mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#80C03D] opacity-20 mr-2'></div>
          <div className='w-4 h-4 rounded-full bg-[#80C03D] opacity-20'></div>
        </div>
        <img
          src={require('../images/image33.png')}
          alt=''
          className='absolute -top-6 right-[35%] w-12 h-12 object-cover -rotate-90'
        />
        <div>
            <img src={Decor} alt="" className='absolute bottom-[30%] -left-10 w-20 object-cover' />
        </div>

        <div className='p-10 md:p-20'>
          <button className='flex flex-row items-center bg-[#FFDAD7] rounded-3xl border-2 border-[#FCC7C3] mt-2 md:mt-0'>
            <span className='text-[#2A333E] font-medium p-2'>
              Faster Food Delivery Service
            </span>
            <img
              src={bike}
              alt=''
              className='w-14 h-14 md:w-12 md:h-12 object-cover'
            />
          </button>

          <div className='my-4'>
            <h1 className='font-semibold md:font-extrabold text-[40px] md:text-[60px] text-[#EA0000] leading-[35px] md:leading-[62px] tracking-[-0.06em]'>
              <span className='font-abh'>
                Get delivered while it is still hot.
              </span>
            </h1>
          </div>
          <p className='text-[#2A333E] text-sm leading-8 w-full md:w-2/3 mb-4 md:mb-8'>
            Bring together your discussions memberships and content. Start your
            7-day free trial.
          </p>
          <button className='px-4 py-2.5 bg-[#2A333E] rounded-[10px] text-white font-medium text-center'>GET STARTED</button>
        </div>
        {/* <div className='absolute bottom-14 right-20 z-3'>
            <img src={coffee} alt="" className='w-[100px] md:w-[200px] object-cover' />
        </div> */}
        <div className='absolute -bottom-4 -right-4 z-3'>
            <img src={MaskGroup1} alt="" className='w-[100px] md:w-[200px] object-cover' />
        </div>
      </div>
    </div>
  );
};

export default MoreProducts;
