import React from 'react';
import vector7 from "../images/icons/vector7.png";
import vector8 from "../images/icons/vector8.png";
import vector9 from "../images/icons/vector9.png";
import vector10 from "../images/icons/vector10.png";

function Sm() {
  return (
    <div className='flex flex-col primary ml-28 mt-1'>
        <h1 className='font-bold text-[14px]'>Social media</h1>
        <div className='flex flex-row gap-5 mt-11'>
            <a href="..."><img src={vector7} alt=""className='h-3' /></a>
            <a href='...'><img src={vector8} alt=""className='h-3' /></a>
            <a href="..."><img src={vector9} alt=""className='h-3' /></a>
            <a href="..."><img src={vector10} alt=""className='h-3' /></a>
        </div>
    </div>
  )
}

export default Sm
