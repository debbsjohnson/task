import React from 'react';


import woman1 from "../images/woman1.png";
import rectangle1 from "../images/rectangle1.png";
import rectangle2 from "../images/rectangle2.png";
// import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import vector11 from "../images/icons/vector11.png";
import vector12 from "../images/icons/vector12.png";

function Reviews() {
  return (
    <section className='container mx-auto h-full mt-32 relative font-primary text-[#474545]'>
          <div className='flex flex-col'>
            <div className='flex flex-row ml-20'>
                <h1 className='font-bold text-[40px]'>People on Softlife</h1>
              <div className='flex flex-row mt-5 ml-[40rem]'>
                <HiOutlineArrowNarrowLeft className='mr-6'/>
                <HiOutlineArrowNarrowRight />
                </div>
            </div>
          <div className='flex flex-row'>
            <div className='-mt-10'>
              <div className='xl:top-10 flex absolute mt-80 ml-28'>
                <img src={rectangle1} alt="" className='h-36' />
               </div>
              <div className='xl:top-10 flex relative'>
                <img src={woman1} alt="" className='h-76' />
              </div>
              <div className='xl:left-80 flex -mt-28 pt-2 ml-72'>
                <img src={rectangle2} alt="" className='h-36' />
              </div>
            </div>
            <div className='flex flex-col h-52 w-4/6 mt-40 rounded-2xl ml-4 bg-[#FBF9FD]'>
                <p className='max-w-md mt-10 text-[14px] ml-6'>Our professionals are reliable & well-trained, with an average 
                    rating of 4.78 out of 5!</p>
                  <div className='flex flex-col ml-6 mt-8'>
                      <p className='text-[12px] text-purple-600'>Omar khalid</p>
                      <div className='flex flex-row'>
                        <p className='text-[12px]'>Developer Oxylox</p>
                        <div className='ml-[19rem] flex flex-row'>
                        <img src={vector11} alt=""className='h-3 w-3 mr-2'/>
                        <img src={vector11} alt=""className='h-3 w-3 mr-2'/>
                        <img src={vector11} alt=""className='h-3 w-3 mr-2'/>
                        <img src={vector11} alt=""className='h-3 w-3 mr-2'/>
                        <img src={vector12} alt=""className='h-3 w-3 mr-2'/>
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
