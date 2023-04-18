import React from 'react';
import manwithlaptop from "../images/manwithlaptop.png";
import playstore from "../images/playstore.png";
import logormv from "../images/logormv.png";

function Relax() {
  return (
    <section className='container mx-auto h-full mt-36 relative font-primary text-[#474545] flex justify-center'>
      <div className='flex flex-col'>
          <h1 className='text-[44px] font-bold leading-6'>We want you</h1>
          <h1 className='text-[44px] font-bold ml-14'>to relax</h1>
          <div className='flex flex-row ml-16'>
            <div className='flex flex-col'>
              <p>Download our app</p>
              <p className='ml-4'>to get started!</p>
            </div>
            <div className='flex absolute ml-[155px] -mt-[88px]'>
            <img src={manwithlaptop} alt="" className='h-36' />
          </div>
        </div>
        <div className='flex flex-row mt-20 mb-8 xl:mb-0'>
                <button className='w-36 h-12 bg-black mr-4 rounded-md flex flex-row items-center'>
                   <img src={logormv} alt="" className=' h-10 w-10' />
                   <div className='flex flex-col mt-1 ml-2 leading-4 mr-2'>
                   <p className='text-white text-[10px] font-light'>Download on the</p>
                   <p className='text-white text-[18px] font-normal mb-1'>AppStore</p>
                   </div>
                </button>
                <button className='w-36 h-12 bg-black rounded-md flex flex-row'>
                    <img src={playstore} alt="" className='w-10 mt-1 ml-2' />
                    <div className='flex flex-col mt-1'>
                    <p className='text-white text-[10px] leading-3 mr-5 font-light tracking-tight'>GET IT ON</p>
                    <p className='text-white text-[18px] font-normal'>Google Play</p>
                    </div>
                </button>
              </div>
      </div>
    </section>
  )
}

export default Relax;
