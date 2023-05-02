import React from 'react';


import woman1 from "../images/people_illust.png";

// import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import vector11 from "../images/icons/vector11.png";
import vector12 from "../images/icons/vector12.png";

function Reviews() {
  return (
    <section className='container mx-auto h-full mt-32 relative font-primary text-[#474545]'>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between mx-3  md:mx-0 items-center'>
          <h1 className='font-bold text-2xl md:text-4xl'>People on Softlife</h1>
          <div className='flex flex-row'>
            <HiOutlineArrowNarrowLeft className='mr-6' />
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-10 space-y-2'>
          <div className=''>
            <div className='flex relative'>
              <img src={woman1} alt="" className='h-76' />
            </div>
          </div>
          <div className='flex flex-col w-4/6 h-auto rounded-2xl bg-[#FBF9FD] p-8 '>
            <p className='max-w-md text-[14px]'>Our professionals are reliable & well-trained, with an average
              rating of 4.78 out of 5!</p>
            <div className='flex flex-col mt-8'>
              <p className='text-[12px] text-purple-600'>Omar khalid</p>
              <div className='flex flex-row justify-between'>
                <p className='text-[12px]'>Developer Oxylox</p>
                <div className=' flex flex-row'>
                  <img src={vector11} alt="" className='h-3 w-3 mr-2' />
                  <img src={vector11} alt="" className='h-3 w-3 mr-2' />
                  <img src={vector11} alt="" className='h-3 w-3 mr-2' />
                  <img src={vector11} alt="" className='h-3 w-3 mr-2' />
                  <img src={vector12} alt="" className='h-3 w-3 mr-2' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
