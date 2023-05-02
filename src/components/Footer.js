import React from 'react';
import vector1 from "../images/icons/vector1.png";
import playstore from "../images/playstore.png";
import logormv from "../images/logormv.png";
import Company from './Company';
import Contact from './Contact';
import Sm from './Sm';
import ServF from './ServF';

function Footer() {
  return (
    <footer className='container mx-auto h-full mt-36 relative font-primary text-[#474545] flex pb-32'>
      <div className='flex flex-col md:flex-row relative  px-8 sm:px-0'>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <img src={vector1} alt="" className='h-7' />
            <p className='font-secondary text-[#8028FF] text-[18px]'>softlife</p>
          </div>
          <p className='text-[10px] mt-14'>Download the app by clicking the link below :</p>
          <div className='flex flex-row mt-12 mb-8 xl:mb-0'>
            <button className='w-28 h-8 bg-black rounded-md flex flex-row'>
              <img src={playstore} alt="" className='w-4 mt-2 ml-2' />
              <div className='flex flex-col mt-1 ml-2'>
                <p className='text-white text-[6px] mr-10 font-light tracking-tight'>GET IT ON</p>
                <p className='text-white text-[12px] font-normal leading-3'>Google Play</p>
              </div>
            </button>
            <button className='w-28 h-8 bg-black ml-4 rounded-md flex flex-row items-center'>
              <img src={logormv} alt="" className='w-6 h-6 ml-1' />
              <div className='flex flex-col mt-1 ml-2'>
                <p className='text-white text-[5px] font-light mr-2'>Download on the</p>
                <p className='text-white text-[12px] font-normal'>AppStore</p>
              </div>
            </button>
          </div>
        </div>

        <Company />
        <ServF />
        <Contact />
        <Sm />
      </div>
    </footer>
  )
}

export default Footer
