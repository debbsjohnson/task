import React from 'react';

import targetlove from "../images/targetlove.png";
import guarantee from "../images/guarantee.png";
import trophy from "../images/trophy.png";
import smartphoneholding from "../images/smartphoneholding.png";




function Reasons() {
  return (
    <section className='mx-auto h-full mt-56 relative font-primary text-[#474545] flex justify-center'>
        <div className='flex flex-col justify-center mx-auto'>
          <div className='flex flex-col ml-32'>
              <p className='text-[40px] font-semibold ml-14'>There are so many</p>
            <div className='flex flex-row'>
              <p className='text-[40px] font-semibold'>reasons to </p>
              <img src={targetlove} alt="" className='h-12' data-aos='fade-up' data-aos-delay='1100' />
              <p className='text-[40px] font-semibold'>love softlife</p>
              </div>
              <p className='ml-48 font-normal mt-3 text-[14px]'>Here are Top 3!</p>
          </div>

          <div className='flex flex-row mt-12 space-x-2'>
            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center'>
                  <img src={guarantee} alt="" className='w-16 h-16 ml-24 mt-4' />
                  <p className='text-[18px] mt-4 ml-20 pl-3'>Top rated</p>
                  <p className='text-[18px] ml-20'>Professionals</p>
                  <p className='text-[10px] ml-16 mt-3'>Our professionals are reliable & </p>
                  <p className='text-[10px] ml-12 leading-4'>well-trained, with an average rating</p>
                  <p className='text-[10px] ml-24'>of 4.78 out of 5!</p>
            </div>

            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center'>
                  <img src={smartphoneholding} alt="" className='w-16 h-16 ml-20 mt-4' />
                  <p className='text-[18px] mt-4 ml-24'>Super,</p>
                  <p className='text-[18px] ml-20'>reliable App</p>
                  <p className='text-[10px] ml-12 mt-4'>Being a Super app means we’ve got</p>
                  <p className='text-[10px] ml-12 pl-1 leading-4'>the widest range of home services,</p>
                  <p className='text-[10px] ml-16 pl-2'>so we’ve got you covered!</p>
            </div>

            <div className='w-64 h-72 bg-[#F7F2FC] flex flex-col rounded-3xl justify-center'>
                  <img src={trophy} alt="" className='w-16 h-16 ml-20 mt-4' />
                  <p className='text-[18px] mt-5 ml-8 pl-3'>Top quality,money</p>
                  <p className='text-[18px] ml-10'>for valued services</p>
                  <p className='text-[10px] ml-10 mt-4'>Our professionals are equipped with</p>
                  <p className='text-[10px] ml-12 leading-4'>the best tools and our services are </p>
                  <p className='text-[10px] ml-14'>always priced with you in mind.</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Reasons
