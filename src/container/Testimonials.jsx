import React from 'react'
import { CardTestimonial } from '../components'
import { person1, person2, stars4 } from '../images'
const message1 = '“Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing mrs few. Mrs for hour game room want are fond dare. For detract charmed add talking age. Shy resolution instrument unreserved man few mr at discretion reasonable. Age out full gate bed day lose.”'
const message2 = '“Out believe has request not how comfort evident. Up delight cousins we feeling minutes. Genius has looked end piqued spring. Down has rose feel find man. Learning day desirous informed expenses material returned six the. She enabled invited exposed him another. Reasonably conviction solicitude me mr at discretion reasonable. Age out full gate bed day lose.”'

const Testimonials = () => {
  return (
    <div className='flex flex-col justify-center px-8 md:px-16 mb-60 font-poppins'>
        <div className="flex flex-col items-center justify-center my-10">
            <h4 className='text-[#2A333E] font-bold text-xl leading-7 text-center uppercase tracking-[0.02em]'>Testimonial</h4>
            <h1 className='text-[60px] text-[#EA0000] font-extrabold leading-[60px] -tracking-[0.08em] text-center'>
          <span className='font-abh'>What they saying</span>
        </h1>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex-1 justify-start items-center mr-10 mb-10 md:mb-0'>
                <CardTestimonial person={person1} location={'California'} star={stars4} message={ message1 } />
            </div>
            <div className='flex-1 justify-start items-center'>
                <CardTestimonial person={person2} location={'Arizona'} star={stars4} message={ message2 } />
            </div>
        </div>
    </div>
  )
}

export default Testimonials
