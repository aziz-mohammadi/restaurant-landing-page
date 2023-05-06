import React from 'react';

const Hero = () => {
  return (
    <section class='flex flex-col justify-center items-center lg:flex-row  px-8 md:px-14 font-poppins w-full min-h-screen' id="hero_section">
      <div class='flex flex-col flex-1 w-full justify-center items-center md:justify-start md:items-start py-12 mr-4'>
        <p class='uppercase font-medium text-[#EA0000] tracking-wider'>Now taking online ordres</p>
        <div className='flex justify-between flex-row'>
          <h1 class='font-abh font-bold text-[120px] -tracking-[10px] mr-14' style={{ color: '#EA0000'}}>kababs</h1>

          <p className='hidden md:block opacity-10 font-bold -rotate-90 text-4xl font--bold text-[#2A333E]'><span className="text-xl font-medium">$</span>14.97</p>
        </div>
        <div className='mb-6'>
          <p className='font-medium leading-8 text-[#2A333E] w-full md:w-2/3 '>Restaurant style Yogurt Mint Sauce is delicious dip which is quick and easy to ... This is a standard Indian mint chutney served with poppadums along with mint and lemon.</p>
        </div>

        <div className='flex items-center mb-6'>
          <button class='px-4 py-2 bg-[#EA0000] text-white mr-4 rounded-lg'>
            Add To Cart
          </button>
          <button class='py-2 px-4 bg-[#2A333E] text-white rounded-lg shadow border border-gray-900 hover:border-transparent'>
            Book a Table
          </button>
        </div>

        <div className='flex flex-row space-x-10'>
          <div className='flex flex-col items-start'>
            <h2 className='font-semibold text-lg leading-8 text-[#2A333E]'>Lunch</h2>
            <p className='text-sm text-[#2A333E] opacity-50'>1:00-03:00pm</p>
          </div>
          <div>
            <h2 className='font-semibold text-lg leading-8 text-[#2A333E]'>Dinner</h2>
            <p className="text-sm text-[#2A333E] opacity-50">7:00-10:00pm</p>
          </div>
        </div>
      </div>

      <div class='relative flex justify-center items-center flex-1'>
        <div>
          <img src={require('../images/hero3.png')} alt='' className='w-full h-full object-cover' />
        </div>
        
        <img src={require('../images/image35.png')} alt="leave" className="absolute top-[25%] right-[60%] w-8 h-8 object-cover" />

        <img src={require('../images/image33.png')} alt="leave" className="absolute top-1/3 right-10 w-8 h-8 object-cover" />

        <img src={require('../images/image35.png')} alt="leave" className="absolute bottom-10 right-40 w-8 h-8 object-cover" />

        <img src={require('../images/image33.png')} alt="leave" className="absolute bottom-10 left-0 w-8 h-8 object-cover rotate-180" />

        <img src={require('../images/image33.png')} alt="leave" className="absolute bottom-0 right-20 w-12 h-12 object-cover rotate-180 blur-[2px]" />
      </div>
    </section>
  );
};

export default Hero;
