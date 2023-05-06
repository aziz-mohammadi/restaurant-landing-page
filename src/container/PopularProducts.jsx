import React from 'react';
import { SingleProduct } from '../components';
import {
  product1,
  product2,
  product3,
  product4,
  stars1,
  stars2,
  stars3,
  stars4,
} from '../images';
const PopularProducts = () => {
  return (
    <div
      className='relative flex flex-col py-12 lg:py-6 font-poppins'
      id='popular_products'
    >
      <img
        src={require('../images/image35.png')}
        alt=''
        className='absolute top-60 md:top-20 -left-4 w-12 h-12 rotate-12 blur-sm'
      />
      <div className='flex flex-col justify-center items-center pb-10 md:pb-20'>
        <h4 className='text-[#2A333E] font-bold text-xl leading-7 text-center uppercase tracking-[0.02em]'>
          Online Store
        </h4>
        <h1 className='text-[60px] text-[#EA0000] font-extrabold leading-[60px] -tracking-[0.08em] text-center'>
          <span className='font-abh'>Popular Products</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 md:px-16'>
        <SingleProduct
          imgUrl={product1}
          stars={stars1}
          foodStyle={'chinese'}
          foodName={'Hot Wings'}
          price={'$14.00'}
        />
        <SingleProduct
          imgUrl={product2}
          stars={stars2}
          foodStyle={'Indian Style'}
          foodName={'Rice with Curry'}
          price={'$22.00'}
        />
        <SingleProduct
          imgUrl={product3}
          stars={stars3}
          foodStyle={'Pakistani Style'}
          foodName={'Chapatees'}
          price={'$18.00'}
        />
        <SingleProduct
          imgUrl={product4}
          stars={stars4}
          foodStyle={'Western Style'}
          foodName={'Sweetdish'}
          price={'$16.00'}
        />
      </div>
    </div>
  );
};

export default PopularProducts;
