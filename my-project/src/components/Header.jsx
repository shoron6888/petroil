import React from 'react'
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa";



const Header = () => {
  return (
    <div className="py-[15px] bg-hbg">
<div className='max-w-container mx-auto '>
        <div className="lg:flex">
            <div className='w-full sm:w-full lg:w-1/4'>
            <div className='flex item-center justify-center lg:justify-start  relative after:absolute after:top-0 after:right-[70px] after:content-[""] after:h-[25px] after:w-[2px] lg:after:bg-hbdrbg after:bg-none'>

                <IoMailUnreadOutline className='text-[18px] text-white' />
                <p className='font-pops text-white text-[12px] pl-[5px]'>mail@yourcompany.com</p>
            </div>
            </div>
            <div className='w-full sm:w-full lg:w-1/4  lg:py-0 py-1'>
            <div className='  flex item-center justify-center lg:justify-start  text-white'>
                <PiPhoneCallFill className='text-[18px]'  />
                <p className='font-pops text-[12px] pl-[5px]'>+896 120 5889 (Toll free)</p>
            </div>
            </div>
            <div className='w-full sm:w-full lg:w-1/2'>
            <div className=' flex lg:justify-end  justify-center    text-white gap-6'>
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
            </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Header