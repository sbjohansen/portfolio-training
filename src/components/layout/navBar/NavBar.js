import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='absolute h-screen w-screen'>
      <div className='absolute flex  mx-auto justify-center left-0 right-0 top-0 z-10 '>
        <NavLink to='/' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Home
        </NavLink>
      </div>
      <div className='absolute flex  mx-auto justify-center left-0 right-0 bottom-1 z-10'>
        <NavLink to='/contact' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Contact
        </NavLink>
      </div>
      <div className='absolute flex  left-0  top-[50%] z-10 -rotate-90'>
        <NavLink to='/skills' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Skills
        </NavLink>
      </div>
      <div className='absolute flex top-[50%] z-10 right-0 rotate-90'>
        <NavLink to='/experience' className=' hover:scale-[1.2] transition-all ease-in-out '>
          Experience
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
