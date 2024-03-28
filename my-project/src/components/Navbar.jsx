import React, { useState } from 'react'
import logo from"../assets/Logo.png"
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
    let [show,setShow]=useState(false)
  return (
    <div className='bg-navbg py-[30px]'>
            <div className='max-w-container mx-auto' >
        <div className='flex justify-between'>
            <div className='lg:ml-[0px] ml-[10px]'>
                <div className=""> 
                <img src={logo} alt="" /></div>
            </div>
            <div className='felx '>
                <ul className={`lg:flex  text-center absolute z-50 lg:static ${show ==true ? 'top-[195px] left-0 bg-[#f40404]  w-full  duration-700 ': ' duration-700 top-[195px] left-[-500px] w-full bg-[none]'}`}>
                    <li className='lg:ml-[47px] text-white font-semibold font-pops leading-[53px]'><a href="#">Home</a></li>
                    <li className='lg:ml-[47px] text-white font-semibold font-pops leading-[53px]'><a href="#">About</a></li>
                    <li className='lg:ml-[47px] text-white font-semibold font-pops leading-[53px]'><a href="#">Services</a></li>
                    <li className='lg:ml-[47px] text-white font-semibold font-pops leading-[53px]'><a href="#">Gallery</a></li>
                    <li className='lg:ml-[47px] text-white font-semibold font-pops leading-[53px]'><a href="#">Blog</a></li>
                    <li className='lg:ml-[47px] inline-block lg:  text-white font-semibold font-pops border-[2px] py-[13px] px-[31px] mb-[50px] lg:mb-0 hover:bg-white hover:text-[#F40404] duration-[.4s] '><a href="#">CONTACT</a></li>
                </ul>
            </div>
                <div className='lg:hidden relative z-50 top-[4px] right-[10px] text-[30px]' onClick={()=>{setShow(!show)}}>
                    {show==true ? <RxCross2/> : <FaBars/>}
                    
                    
                </div>
        </div>
        
    </div>
    </div>
  )
}

export default Navbar