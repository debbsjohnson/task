import React from 'react';
import vector4 from "../images/icons/vector4.png";
import vector5 from "../images/icons/vector5.png";
import vector6 from "../images/icons/vector6.png";

function Contact() {
  return (
    <div className='flex flex-col primary mt-1'>
      <h1 className='font-bold text-[14px]'>Contact</h1>
      <div className='mt-6 flex flex-col'>
        <div className='flex flex-row space-x-2 mt-6'>
          <img src={vector4} alt="" className='h-4 ' />
          <a href="..." className='text-[12px]  '>(405)-555-0120</a>
        </div>
        <div className='flex flex-row'>
          <img src={vector5} alt="" className='h-4 mr-3 mt-6' />
          <a href="..." className='text-[12px] mt-6 '>mangcoding123@gmail.com</a>
        </div>
        <div className='flex flex-row items-align'>
          <img src={vector6} alt="" className='h-4 mr-3 ml-1 mt-6' />
          <a href="..." className='text-[12px] mt-5 ml-1'>2972 Westheimer Rd. Santa <br></br> Ana, Illinois 85486 </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
