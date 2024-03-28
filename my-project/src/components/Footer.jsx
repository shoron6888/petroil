import React from 'react'
import logo from "../assets/Logo.png"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrMap } from "react-icons/gr";
import cert1 from "../assets/Cert1.png"
import cert2 from "../assets/Cert2.png"
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { LiaTwitter } from "react-icons/lia";
import { IoLogoInstagram } from "react-icons/io";



const Footer = () => {
    return (
        <>
            <div className="bg-[#1F1F1F]">
                <div className=" lg:py-[149px] py-[60px] max-w-container mx-auto  flex flex-wrap justify-between lg:text-start text-center">
                    <div className='w-full lg:w-1/4 '>
                        <img src={logo} className='lg:mx-0 mx-auto' alt="" />
                        <div className='flex item-center justify-center lg:justify-start pt-[33px]'>
                            <MdOutlineMarkEmailUnread className='text-[18px] text-white' />
                            <p className='font-pops text-white text-[14px] font-regular pl-[5px]'>mail@yourcompany.com</p>
                        </div>
                        <div className='flex item-center justify-center lg:justify-start py-[15px]'>
                            <LuPhoneCall className='text-[18px] text-white' />
                            <p className='font-pops text-white text-[14px] font-regular pl-[5px]'>+896 120 5889 (Toll free)</p>
                        </div>
                        <div className='flex item-center justify-center lg:justify-start'>
                            <GrMap className='text-[18px] text-white' />
                            <p className='font-pops text-white text-[14px] font-regular pl-[5px]'>101 Baker Street, New York, USA, 12345</p>
                        </div>
                        <div className="flex pt-[34px] lg:justify-start justify-center ">
                            <TiSocialFacebook className='text-[12px] text-[white] h-[30px] w-[30px] bg-[#F40404] rounded-[50%]' />
                            <LiaTwitter className='text-[12px] text-[white] h-[30px] w-[30px] mx-[12px] bg-[#F40404] rounded-[50%]' />
                            <TiSocialLinkedin className='text-[12px] text-[white] h-[30px] w-[30px] bg-[#F40404] rounded-[50%]' />
                            <IoLogoInstagram className='text-[12px] text-[white] h-[30px] w-[30px] ml-[12px] bg-[#F40404] rounded-[50%]' />
                        </div>
                    </div>

                    <div className="lg:w-1/5 w-2/6 lg:pt-0 pt-5 ">
                        <h4 className='text-white text-[16px] font-pops font-bold pb-[21px]'>Company</h4>

                            <ul>
                                <li> <a href="#" className='text-white text-[14px] font-pops font-regular'> Home </a></li>
                                <li className='my-[15px]'><a href="#" className='text-white text-[14px] font-pops font-regular my-[15px]'> About</a></li>
                                <li><a href="#" className='text-white text-[14px] font-pops font-regular'> Services </a></li>
                                <li className='mt-[15px]'><a href="#" className='text-white text-[14px] font-pops font-regular my-[15px]'> Gallery</a></li>
                            </ul>   
                    </div>
                    <div className="lg:w-1/5 w-1/2 lg:pt-0 pt-5">
                        <div className="">
                            <h4 className='text-white text-[16px] font-pops font-bold pb-[21px]'>Others</h4>
                            <ul>
                                <li> <a href="#" className='text-white text-[14px] font-pops font-regular'> Blog </a></li>
                                <li ><a href="#" className='text-white text-[14px] font-pops font-regular '> Contact</a></li>
                                <li><a href="#" className='text-white text-[14px] font-pops font-regular'> Terms & Conditions  </a></li>
                                <li className='mt-[15px]'><a href="#" className='text-white text-[14px] font-pops font-regular '> Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-1/5 w-full lg:pt-0 pt-5">
                        <h2 className='text-white text-[16px] font-pops font-bold pb-[21px]'>Certificate</h2>
                        <div className="flex  gap-5">
                            <img src={cert1} className='mx-auto' alt="" />
                            <img src={cert2} className='mx-auto' alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer