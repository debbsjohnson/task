import React from 'react';
import press from "../images/press.png";
import { useState } from 'react';


function Delivery() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${name}\n${email}\n${phone}\n${location}`);
    // send form data to backend or API
  };



  return (
    <section className='container mx-auto h-full mt-36 relative font-primary text-white flex justify-center'>
      <div className='flex relative w-10/12 h-[30rem] rounded-[62px] bg-gradient-to-r from-purple-500 to-purple-700'>
          <div className='flex flex-row ml-8 mt-8'>
              <div className='flex flex-col mt-24 ml-20'>
                  <h1 className='text-[52px] leading-5'>Deliver</h1>
                  <h1 className='text-[52px]'>Services?</h1>
                  <p className='max-w-[200px] mt-4'>Submit the form &
                  become our partner</p>
                  <img src={press} alt="" className='-mt-[10rem] ml-20 h-[15rem]' />
            </div>
            <div className=' ml-20'>
                <form onSubmit={handleSubmit} className="flex flex-col ml-14">
                    <label>
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className='bg-transparent w-96 border-b border-white mt-6 placeholder-white font-light py-3 text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600'/>
                  </label>
                  <label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className='bg-transparent w-96 border-b border-white mt-6 py-3 placeholder-white font-light text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
                  </label>
                  <label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className='bg-transparent w-96 border-b border-white mt-6 py-3 placeholder-white font-light text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
                  </label>
                  <label>
                      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className='bg-transparent w-96 border-b border-white font-light py-3 mt-6 placeholder-white text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600'  />
                  </label>
                  <div className='flex flex-row'>
                    <button type="submit" className=' bg-[#FDA120] w-40 h-12 mt-6 rounded-full text-[14px] hover:bg-white hover:text-[#8028FF]'>Submit</button>
                    <p className='text-[9px] font-light mt-10 ml-6'>By submiting the form, you <br></br>
                    agree to our <span className='font-semibold'>Terms & Conditions</span></p>
                    </div>
                </form>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Delivery
