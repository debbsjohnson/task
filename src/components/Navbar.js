import React from 'react';
import vector1 from "../images/icons/vector1.png";
import vector2 from "../images/icons/vector2.png";
// import NavMobile from './NavMobile';

function Navbar() {
  return (
    <nav className='flex justify-between relative z-50 w-full items-center'>
      <div className=' flex justify-between font-primary container mx-auto my-14 items-center'>
        <div className='flex flex-col leading-4'>
          <div className='flex flex-row'>
            <img src={vector1} alt="" className='h-5' />
            <p className='font-secondary text-[#8028FF] text-[22px]'>oft</p>
          </div>
          <div className='flex flex-row'>
            <img src={vector2} alt="" className='h-5' />
            <p className='font-secondary text-[#8028FF] text-[22px]'>ife</p>
          </div>
        </div>
        <div className='flex relative gap-x-12 text-gray-600 text-[14px] font-normal mr-62'>
          <a href='...'>About us</a>
          <a href='...' >How it works</a>
          <a href='...'>Be our partner</a>
        </div>
        <button className='text-gray-700 font-semibold text-[14px]'>EN | RU</button>
        </div>
    </nav>
  )
}

export default Navbar
