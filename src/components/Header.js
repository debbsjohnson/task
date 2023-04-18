import React from 'react';

// import vector1 from "../images/icons/vector1.png";
// import vector2 from "../images/icons/vector2.png";
import Navbar from './Navbar';
import NavMobile from './NavMobile';


import { FaBars } from "react-icons/fa";
// import { BsArrow }
// import { BsArrowRight } from "react-icons";

function Header() {
  return (
    <header>
      <div className='container mx-auto'>
        <div className=''>
            <div className='hidden lg:flex'>
                <Navbar />
            </div>

            <div className='lg:hidden'> 
                <NavMobile />
            </div>
            <div className='lg:hidden text-primary cursor-pointer'>
             <FaBars />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
