import React from 'react';
import ContactIcon from '../../assets/icon/contact.svg';

const Header = () => {
  return (
    <div className="relative">
      <div className='w-full h-[40rem] bg-gradient-to-bl from-secondary via-transitionBlue/90 to-secondary bg-opacity-5'>
        <div className="absolute top-0 left-0 h-20 w-2/3">
          <div className="h-full w-2/3 bg-lightGreen float-left"></div>
          <div className="h-full w-1/3 bg-gradient-to-r from-lightGreen to-transparent float-left"></div>
        </div>
        <div className='absolute top-0 left-0 h-20 w-2/3 flex items-center'>
          <a href="#section1" className="text-white mx-5 text-2xl">Section 1</a>
          <a href="#section2" className="text-white mx-5 text-2xl">Section 2</a>
          <a href="#section3" className="text-white mx-5 text-2xl">Section 3</a>
          <a href="#section4" className="flex items-center text-white mx-5 p-2 text-2xl bg-white text-lightGreen rounded-md">
            <img src={ContactIcon} alt="Contact" className="w-8 h-8 mr-2 fill-white" />
            Contactez-moi
          </a>
        </div>
      </div>
      <div className="w-full h-16 bg-darkblue"></div>
    </div>
  );
};

export default Header;
