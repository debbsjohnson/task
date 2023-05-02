import React from 'react';

import bucket from "../images/bucket.png";
import cleaningtools from "../images/cleaningtools.png";
import sofa from "../images/sofa.png";
import holdingbucket from "../images/holdingbucket.png";




function Services() {

  return (
    <section className='container mx-auto h-full relative font-primary flex flex-col'>
      <div>
        <div className='flex relative justify-center items-center w-11/12 h-[32rem] mx-auto rounded-[62px] bg-gradient-to-r from-purple-400 to-purple-700'>
          <div className='flex flex-col mb-8 justify-center items-center'>
            <p className='h1 text-white font-extralight text-[12px] leading-[3rem]'>DO'S AND DON'TS</p>
            <p className='text-3xl md:text-5xl font-normal text-white leading-10'>Don't work and clean</p>
            <p className='text-3xl  md:text-5xl font-normal text-white'>Do work and relax</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center mt-16 md:mt-0'>
          <div className='flex flex-col mx-auto  md:w-2/4 items-center'>
            <p className='text-2xl md:text-4xl text-center font-semibold text-[#474545] font-primary'>We currently have</p>
            <div className='flex flex-col justify-center mt-10 md:w-3/4'>
              <div className='flex flex-row mb-4 md:w-50 justify-between'>
                <div className='w-50 h-14 bg-[#F4F0FB] rounded-2xl flex justify-center px-3'>
                  <img src={cleaningtools} alt="" className='w-10 h-9 mt-2' />
                  <p className='font-bold text-[12px] mt-5 text-[#8028FF]'>Home cleaning</p>
                </div>
                <div className='w-50 h-14 bg-[#F4F0FB] rounded-2xl flex justify-center px-3'>
                  <img src={bucket} alt="" className='w-10 h-7 ml-2 mt-3' />
                  <p className='font-bold text-[12px] mt-5 text-[#8028FF]'>Deep cleaning</p>
                </div>
              </div>

              <div className='flex flex-row mb-4 md:w-50 justify-between'>
                <div className='w-50 h-14 bg-[#F4F0FB] rounded-2xl flex justify-center px-3'>
                  <img src={sofa} alt="" className='w-9 ml-2 mt-2' />
                  <p className='font-bold text-[12px] mt-5 text-[#8028FF]'>Furniture cleaning</p>
                </div>
                <div className='w-50 h-14 bg-[#F4F0FB] rounded-2xl flex justify-center px-3'>

                  <p className='font-bold text-[12px] mt-5 text-[#8028FF] flex justify-center'>More services soon...</p>
                </div>
              </div>
            </div>
          </div>
          <div className='justify-center items-center mx-auto'>
            <img src={holdingbucket} alt="" className='h-auto w-100 md:w-50' data-aos='fade-up' data-aos-delay='1000' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Services
