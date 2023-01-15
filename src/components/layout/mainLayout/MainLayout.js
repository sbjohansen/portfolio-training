import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-col h-screen'>
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
