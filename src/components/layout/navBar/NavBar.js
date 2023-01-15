import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='absolute min-h-screen  w-full'>
      <div className='absolute flex w-full mx-auto justify-center top-0 z-10'>
        <NavLink to='/' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Home
        </NavLink>
      </div>
      <div className='absolute flex w-full mx-auto justify-center bottom-0 z-10'>
        <NavLink to='/contact' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Contact
        </NavLink>
      </div>
      <div className='absolute flex  left-0  top-[50%] z-10 -rotate-90'>
        <NavLink to='/skills' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Skills
        </NavLink>
      </div>
      <div className='absolute flex  justify-end top-[50%] z-10	right-0 rotate-90'>
        <NavLink to='/experience' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Experience
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
