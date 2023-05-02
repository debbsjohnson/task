import React from 'react';
import location from "../images/location.png";
// import apple from "../images/icons/appleicon.png"
import playstore from "../images/playstore.png";
import logormv from "../images/logormv.png";
import clickhand from "../images/clickhand.png";
import iphone1 from "../images/iphone1.png";
import iphone3 from "../images/iphone3.png";
// import Navbar from './Navbar';
// import Header from './Header';

// import location from "../"


// import { heroData } from '../data';


function Hero() {

    // const { title, subtitle, btn1, btn2, imagee } = heroData;

    return (
        <section className="lg:h-[900px]">


            <div className="container mx-auto min-h-screen relative font-primary">
                <div className='flex flex-col xl:flex-row items-center h-full py-24 md:pt-76'>
                    {/* Text */}
                    <div className='text-center xl:text-left px-4 md:px-0 '>
                        <h1 className="font-primary text-[#474545] text-4xl md:text-6xl font-semibold leading-15" data-aos='fade-down' data-aos-delay='400'>#1 Super app for <br></br>all <span className='text-[#8028FF] font-semibold'> home services</span> </h1>
                        <div className='flex flex-row items-center justify-center md:justify-start' data-aos='fade-down' data-aos-delay='500'>
                            <p className='font-fontFamily:primary text-[#474545] text-md font-normal'>We deliver home services in one click in</p>
                            <img src={location} alt="" className='w-8 h-5 mb-0.5 tracking-tighter' />
                            <p className='font-fontFamily:primary text-[#474545] font-normal text-[15px]' >lagos</p>
                        </div>
                        <div className='flex flex-row mt-12 mb-8 xl:mb-0 justify-center md:justify-start' data-aos='fade-down' data-aos-delay='600'>
                            <button className='w-32 h-10 bg-black mr-4 rounded-md flex flex-row items-center'>
                                <img src={logormv} alt="" className='w-8 h-8 ml-1' />
                                <div className='flex flex-col mt-1 ml-2'>
                                    <p className='text-white text-[8px] font-light'>Download on the</p>
                                    <p className='text-white text-[15px] font-normal'>AppStore</p>
                                </div>
                            </button>
                            <button className='w-32 h-10 bg-black rounded-md flex flex-row'>
                                <img src={playstore} alt="" className='w-6 mt-2 ml-2' />
                                <div className='flex flex-col mt-1 ml-2'>
                                    <p className='text-white text-[10px] leading-3 mr-7 font-light tracking-tight'>GET IT ON</p>
                                    <p className='text-white text-[14px] font-normal'>Google Play</p>
                                </div>
                            </button>
                        </div>
                        <div className='flex flex-col'>
                            <div className='mt-24' data-aos='fade-down' data-aos-delay='700'>
                                <button className='w-20 h-8 border-solid  border-2 border-[#FE798E] mr-4 rounded-xl -rotate-45'>
                                    <p className='text-[#FE798E] text-[10px]'>Laundry</p>
                                </button>
                                <button className='w-24 h-8 border-solid border-2 border-[#FDA120] rounded-xl -rotate-12'>
                                    <p className='text-[#FDA120] text-[10px]'>Pest Control</p>
                                </button>
                                <button className='w-24 h-8 border-solid border-2 border-[#FDA120] mr-4 rounded-xl ml-5 rotate-12'>
                                    <p className='text-[#FDA120] text-[10px]'>Pest Control</p>
                                </button>
                                <div className='max-w-3xl'>
                                    <button className='w-20 h-8 border-solid border-2 border-[#2BCDAC] mr-4 rounded-xl ml-7 -rotate-45 '>
                                        <p className='text-[#2BCDAC] text-[10px]'>Handyman</p>
                                    </button>
                                    <button className='w-24 h-8 border-solid border-2 border-[#8028FF] mr-4 rounded-xl mt-8 -rotate-12'>
                                        <p className='text-[#8028FF] text-[10px]'>Home cleaning</p>
                                    </button>
                                    <button className='w-20 h-8 border-solid border-2 border-[#FE798E] rounded-xl mt-8  rotate-12'>
                                        <p className='text-[#FE798E] text-[10px]'>Laundry</p>
                                    </button>
                                    <button className='w-24 h-8 border-solid border-2 border-[#8028FF] mr-4 rounded-xl mt-8 -rotate-90'>
                                        <p className='text-[#8028FF] text-[10px]'>Spa and salon</p>
                                    </button>
                                    <div />
                                    <button className='w-20 h-8 border-solid border-2 border-[#2BCDAC] mr-4 rounded-xl mt-8 ml-20 -rotate-12'>
                                        <p className='text-[#2BCDAC] text-[10px]'>Handyman</p>
                                    </button>
                                    <button className='w-24 h-8 border-solid border-2 border-[#FDA120] mr-4 rounded-xl mb-10'>
                                        <p className='text-[#FDA120] text-[10px]'>Deep cleaning</p>
                                    </button>
                                </div>
                                <img src={clickhand} alt="" className='w-44 h-44 ml-20' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:mt-20 mx-auto'>
                        <div className='xl:absolute xl:-right-12 xl:bottom-96 justify-center items-center mr-40' data-aos='fade-down' data-aos-delay='800'>
                            <img src={iphone1} alt="" className='w-80 ' />
                        </div>
                        <div className='xl:absolute xl:-right-12 xl:bottom-36 flex flex-col justify-center items-center mr-72' data-aos='fade-up' data-aos-delay='900'>
                            <img src={iphone3} alt="" className='h-96' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
