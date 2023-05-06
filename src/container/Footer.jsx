import React from 'react';
import { vector, location, email, phone } from '../images';
import { GrFacebookOption } from 'react-icons/gr';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='absolute w-full -top-32 flex items-center justify-center font-poppins z-1000 px-4 md:px-0'>
        <div className='flex flex-col items-center justify-center bg-white rounded-[47px] py-6 px-10 md:px-32 border-[1px] border-[#EA0000]'>
          <h4 className='text-[#2A333E] font-bold text-xl leading-7 text-center tracking-[0.02em] mb-2'>
            Get our special discounts
          </h4>
          <p className='text-sm text-[#2A333E] text-center w-full md:w-3/4 mb-2'>
            Input email address and complete your subscription to get our
            special offer.
          </p>
          <div className='flex items-center p-2 rounded-[47px] border-[1px] border-[#EA0000] w-full md:w-3/4'>
            <input
              type='text'
              className='w-full border-none outline-none px-4 rounded-full'
              placeholder='shakir260@gmail.com'
            />
            <button className='text-sm px-5 py-2.5 rounded-[47px] text-white bg-[#EA0000]'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center bg-[#2A333E] text-white px-8 md:px-16 pt-28 pb-6'>
        <div className='w-full flex flex-col md:flex-row items-center md:items-start justify-around mb-10'>
          <div className='flex flex-col items-center md:items-start justify-between gap-6 mb-10 md:mb-0 mr-4'>
            <img src={vector} alt='' className='text-white' />
            <div className='flex items-center gap-6'>
              <GrFacebookOption />
              <BsTwitter />
              <BsInstagram />
              <FaLinkedinIn />
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start gap-4 mb-10 md:mb-0'>
            <h2 className='mb-2 text-lg font-bold'>Contact</h2>
            <div className='flex items-center w-full md:w-3/4'>
              <img src={location} alt='' className='mr-4 mb-4' />
              <p>
                F1 - 320 Jeff Heights, Main Blvd, Gulberg, Lahore, Pakistan
              </p>
            </div>
            <div className='flex items-center w-full md:w-3/4 my-2'>
              <img src={phone} alt='' className='mr-4' />
              <p>
                +92 - 300 - 115 - 222 -444 
              </p>
            </div>

            <div className='flex items-center w-full md:w-3/4 my-2'>
              <img src={email} alt='' className='mr-4' />
              <p>
                support@yannal.com
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start justify-center gap-4 mb-10 md:mb-0'>
            <h2 className='mb-2 text-lg font-bold'>Support</h2>
            <div className='flex flex-row md:flex-col gap-4'>
                <h4>Faq</h4>
                <h4>Shipping & Returns</h4>
                <h4>Contact Us</h4>
                <h4>Our Partners</h4>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start justify-center gap-4 mb-10 md:mb-0'>
            <h2 className='mb-2 text-lg font-bold'>Info</h2>
            <div className='flex flex-row md:flex-col gap-4'>
                <h4>Dates</h4>
                <h4>Parties</h4>
                <h4>Birthdays</h4>
                <h4>Menu</h4>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-sm leading-6'>&copy; 2021 Yannal Resturant</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
