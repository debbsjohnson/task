import React from 'react';

import iphone2 from "../images/iphone2.png";
import repeat from "../images/repeat.png";


function Frequency() {
  return (
    <section className='container mx-auto h-full mt-20 relative font-primary text-[#474545] flex justify-center'>
      <div className='h-[900px] rounded-3xl w-5/6 bg-[#FBF9FD] flex relative pt-32 flex-col items-center'>
        <div className='flex flex-row justify-center'>
          <p className='font-bold text-[40px]'>We can keep</p>
          <img src={repeat} alt="" className='w-12 h-10 mt-2' />
        </div>
        <p className='font-bold text-[40px] '>delivering to you</p>
        <p className='text-[16px] mt-6'>Set your preferred frequency</p>
        <div className='mt-10'>
          <img src={iphone2} alt="" className="h-[500px] ml-8" data-aos='fade-up' data-aos-delay='1200' />
        </div>
      </div>

    </section>
  )
}

export default Frequency


