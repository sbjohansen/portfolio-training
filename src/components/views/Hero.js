import React from 'react';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full h-full'>
      <div className='flex flex-1  w-full h-1/2 sm:h-full justify-center items-center my-auto'>
        <div className='p-5 flex flex-col'>
          <h1 className='text-xs'> My name is:</h1>
          <h2 className='font-bold text-right'>Sita Cicirko</h2>
          <h1 className='text-xs'> and I'm a:</h1>

          <h2 className='font-bold text-right'>Junior Web Developer</h2>
        </div>
      </div>
      <div className='flex flex-1  w-full h-1/2 sm:h-full justify-center items-center'>
        <img src='https://images.pexels.com/photos/5611966/pexels-photo-5611966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Sita Cicirko' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Hero;
