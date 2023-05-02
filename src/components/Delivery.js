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
    <section className='container mx-auto h-full mt-20 relative font-primary text-white flex justify-center'>
      <div className=' relative w-10/12 py-8 rounded-[62px] bg-gradient-to-r from-purple-500 to-purple-700'>
        <div className='flex flex-col md:flex-row justify-evenly md:items-center w-100 p-8 md:p-0'>
          <div className='flex flex-col'>

            <h1 className='text-5xl leading-20'>Deliver <br></br> Services?</h1>
            <p className='max-w-[200px] mt-4'>Submit the form &
              become our partner</p>
            <img src={press} alt="" className=' ml-20 sm:ml-36 md:ml-24 h-[15rem] absolute -10' />
          </div>
          <div className=' w-auto md:w-50'>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className='bg-transparent w-100 border-b border-white placeholder-white font-light py-3 text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
              </label>
              <label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" className='bg-transparent w-100 border-b border-white mt-6 py-3 placeholder-white font-light text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
              </label>
              <label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className='bg-transparent w-100 border-b border-white mt-6 py-3 placeholder-white font-light text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
              </label>
              <label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className='bg-transparent w-100 border-b border-white font-light py-3 mt-6 placeholder-white text-white focus:outline-none focus:bg-trasparent focus:shadow-outline focus:border-gray-600' />
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
