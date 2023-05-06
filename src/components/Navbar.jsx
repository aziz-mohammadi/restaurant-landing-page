import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { logo, search, user, wallet } from '../images';
const Navbar = () => {
  const links = [
    { name: 'menu', link: '/' },
    { name: 'about us', link: '#' },
    { name: 'our specials', link: '#' },
    { name: 'our locations', link: '#' },
    { name: 'our chefs', link: '#' },
  ];
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className='relative flex justify-between items-center px-8 md:px-14 mt-6 ms:mt-10 w-full font-poppins'>
      <NavLink to='/' className='flex-start flex items-center'>
        <img src={logo} alt='' />
      </NavLink>

      <ul className='hidden md:flex items-center space-x-6 md:space-x-8 lg:space-x-10'>
        {links.map((link, index) => (
          <li
            key={index}
            className={index === 0 ? `border-b-2 border-red-500` : ''}
          >
            <NavLink to={link.link}>{link.name}</NavLink>
          </li>
        ))}
      </ul>

      <div className='flex-end flex items-center space-x-10 md:space-x-4 whitespace-nowrap'>
        <button>
          <img src={search} alt='' />
        </button>

        <button className='relative'>
          <img src={wallet} alt='' />
          <div className='absolute -top-2 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center p-[0.5rem]'>
            <span className='text-xs text-white'>2</span>
          </div>
        </button>

        <button>
          <img src={user} alt='' />
        </button>
      </div>
      {toggleNav ? (
        <AiFillCloseCircle
          fontSize={27}
          className='h-6 w-6 cursor-pointer md:hidden block'
          onClick={() => setToggleNav(!toggleNav)}
        />
      ) : (
        <HiMenuAlt3
          fontSize={27}
          className='h-6 w-6 cursor-pointer md:hidden block'
          onClick={() => setToggleNav(!toggleNav)}
        />
      )}

      {toggleNav && (
        <ul className='mt-1 md:hidden flex flex-col items-center absolute top-[6vh] right-0 w-full z-200 space-y-10 p-10 bg-gray-100 bg-opacity-60 backdrop-filter backdrop-blur-lg'>
          {links.map((link, index) => (
            <NavLink key={index} to={link.link} className='w-full m-4'>
              {link.name}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
