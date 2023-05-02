import React from 'react';

import targetlove from "../images/targetlove.png";
import guarantee from "../images/guarantee.png";
import trophy from "../images/trophy.png";
import smartphoneholding from "../images/smartphoneholding.png";




function Reasons() {
  return (
    <section className='mx-auto h-full mt-20 relative font-primary text-[#474545] flex justify-center'>
      <div className='flex flex-col justify-center mx-auto'>
        <div className='flex flex-col text-center justify-center items-center'>
          <p className='text-3xl md:text-6xl font-semibold '>There are so many</p>
          <div className='flex flex-row'>
            <p className='text-3xl md:text-6xl font-semibold'>reasons to </p>
            <img src={targetlove} alt="" className='h-12' data-aos='fade-up' data-aos-delay='1100' />
            <p className='text-3xl md:text-6xl font-semibold'>love softlife</p>
          </div>
          <p className=' font-normal mt-3 text-md'>Here are Top 3!</p>
        </div>

        <div className='overflow-scroll w-screen md:w-100 '>
          <div className='flex flex-row mt-12 space-x-2 mx-3 justify-center'>
            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center items-center shrink-0'>
              <img src={guarantee} alt="" className='w-16 h-16 mt-4' />
              <p className='text-[18px] mt-4'>Top rated Professionals</p>
              <p className='text-xs mt-3 mx-6 text-center'>Our professionals are reliable & well-trained, with an average rating of 4.78 out of 5!</p>
            </div>

            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center items-center shrink-0'>
              <img src={smartphoneholding} alt="" className='w-16 h-16 mt-4' />
              <p className='text-[18px] mt-4'>Super, reliable App</p>
              <p className='text-xs mt-3 mx-6 text-center'>Being a Super app means we’ve got the widest range of home services, so we’ve got you covered!</p>
            </div>

            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center items-center shrink-0'>
              <img src={trophy} alt="" className='w-16 h-16 mt-4' />
              <p className='text-[18px] mt-5 text-center pl-3'>Top quality, money for valued services</p>
              <p className='text-xs mt-3 mx-6 text-center'>Our professionals are equipped with the best tools and our services are always priced with you in mind.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reasons
