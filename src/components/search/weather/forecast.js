import React from 'react'

// Test Scenario 4

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS_OF_DAY = ['12AM', '1AM', '2AM', '3AM', '4AM',
 '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM',
  '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM',
   '9PM', '10PM', '11PM'];


const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    const currentHour = new Date().getHours();
    const timePeriods = HOURS_OF_DAY.slice(currentHour, HOURS_OF_DAY.length).concat(HOURS_OF_DAY.slice(0, currentHour));

    console.log(timePeriods);

    console.log(forecastDays);

  return (
    <div className='flex flex-col space-y-1'>
    <div className='flex w-96 h-36 my-3 shadow-xl rounded-3xl mx-auto bg-white px-6'>
        {data.list.splice(0, 5).map((item, idx) => (
                <div className='flex flex-row items-center justify-between' key={idx}>
                    <div className='flex flex-col items-center mx-5 space-y-5'>
                        <p className='font-semibold text-[9px]'>{Math.round(item.main.temp)}°</p>
                        <img alt="weather" className='w-12' src={`icons/${item.weather[0].icon}.png`}/>
                        <p className='font-semibold text-xs'>{forecastDays[idx]}</p>
                    </div>
                </div>
                ))}
            </div>
    <div className='flex w-96 h-36 my-3 shadow-xl rounded-3xl mx-auto bg-white px-6'>
        {data.list.splice(0, 5).map((item, idx) => (
                <div className='flex flex-row items-center justify-between' key={idx}>
                    <div className='flex flex-col items-center mx-5 space-y-5'>
                        <p className='font-semibold text-[9px]'>{Math.round(item.main.temp)}°</p>
                        <img alt="weather" className='w-12' src={`icons/${item.weather[0].icon}.png`}/>
                        <p className='font-semibold text-xs'>{timePeriods[idx]}</p>
                    </div>
                </div>
                ))}
            </div>
    </div>
  )
}

export default Forecast;


// {`icons/${data.weather[0].icon}.png`}

// <span className='font-light text-xs'>PM</span>
// <div className='flex w-96 h-36 my-3 shadow-xl rounded-3xl mx-auto bg-white px-6'>
//             <div className='flex flex-row items-center justify-between space-x-5'>
//                 <div className='flex flex-col items-center justify-center'>
//                     <p className='font-semibold text-xs '>21°</p>
//                     <p className='font-semibold text-sm '>°</p>
//                     <p className='font-semibold text-xs '>12:00 <span className='font-light text-xs'>PM</span></p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center'>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-xs '>12:00 <span className='font-light text-xs'>PM</span></p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center'>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-xs '>12:00 <span className='font-light text-xs'>PM</span></p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center'>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-xs '>12:00 <span className='font-light text-xs'>PM</span></p>
//                 </div>
//                 <div className='flex flex-col items-center justify-center'>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-sm '>21°</p>
//                     <p className='font-semibold text-xs '>12:00 <span className='font-light text-xs'>PM</span></p>
//                 </div>
//             </div>
//         </div>