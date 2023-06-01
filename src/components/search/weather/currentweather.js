import React from 'react';

// Test Scenario 5

const CurrentWeather = ({data}) => {
  return (
    <div className='w-96 h-36 my-8 shadow-xl rounded-3xl mx-auto bg-gradient-to-r from-white to-orange-200'>
        <div className='flex justify-between items-center mx-4'>
            <div className='mx-5'>
                <p className='text-6xl font-semibold text-primary leading-none'>{Math.round(data.main.temp)}°C</p>
                <p className='text-sm mt-1 leading-none text-[#A5A9B2]'>{data.city}</p>
                <p className='font-normal text-sm leading-2 text-[#A5A9B2]'>{data.weather[0].description}</p>
                <p className='font-normal text-sm leading-2 text-[#A5A9B2]'>{Math.round(data.main.temp) * 9 / 5 + 32}F</p>
            </div>
            <img alt="weather" className="weather-icon w-32 h-32" src={`icons/${data.weather[0].icon}.png`} />
        </div>

    </div>
  )
}

export default CurrentWeather;

// <p className='font-normal text-sm leading-none'>Sunny</p>
//<p className='text-5xl font-bold text-primary leading-none'>°C</p>



// <div className='w-96 h-36 my-8 shadow-xl rounded-3xl mx-auto bg-gradient-to-r from-white to-orange-200'>
// <div className='flex justify-between items-center mx-4'>
// <div className='mx-5'>
//     <p className='text-6xl font-bold text-primary leading-none'>{Math.round(data.main.temp)}°C</p>
//     <p className='text-sm mt-1 leading-none text-[#A5A9B2]'>{data.city}</p>
//     <p className='font-normal text-sm leading-none text-[#A5A9B2]'>{data.weather[0].description}</p>
//     <p className='font-normal text-sm leading-none text-[#A5A9B2]'>{Math.round(data.main.temp)}F</p>
// </div>
// <img alt="weather" className="weather-icon w-32 h-32" src={`icons/${data.weather[0].icon}.png`} />
// </div>

// <div className='flex w-96 h-36 my-8 shadow-xl rounded-3xl mx-auto items-center bg-white'>
// <div className='details'>
//     <div className='p-row'>
//         <span className='p-label'>details</span>
//     </div>
//     <div className='p-row'>
//         <span className='p-label'>feels like</span>
//         <span className='p-value'>22°C</span>
//     </div>
// </div>
// </div>
// </div>
