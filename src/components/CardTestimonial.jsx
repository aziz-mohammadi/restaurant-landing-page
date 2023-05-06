import React from 'react'

const CardTestimonial = ({ person, location, star, message }) => {
  return (
    <div className='flex flex-row items-start'>
        <div className='self-start w-[200px] h-[200px] mr-4'>
            <img src={person} alt="" className='object-cover rounded-xl' />
        </div>
        <div className='flex flex-col items-start self-start'>
            <h2 className='text-sm uppercase text-[#2A333E] font-medium mb-2'>Natasha Malik</h2>
            <h5 className='text-[#2A333E] mb-2'>{location}</h5>
            <div className='mb-2'>
                <img src={star} alt="" />
            </div>
            <p className='text-base capitalize text-[#2A333E]'>{message}</p>
        </div>
    </div>
  )
}

export default CardTestimonial
