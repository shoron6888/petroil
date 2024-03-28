import React from 'react'
import ser1 from "../assets/ser1.png"

const Service = () => {
  return (
   <>
    <div className='lg:flex  lg:justify-between lg:text-start text-center'>
        <div className=" w-full lg:w-1/4 lg:ml-[300px] lg:mt-[106px]">
            <h2 className='lg:text-[64px] text-[48px] font-bold font-pops text-[black]' >Our Service</h2>
            <p className='text-[16px] lg:px-0 px-[10px] lg:pb-0 pb-[30px] font-pops font-medium text-[#6C6C6C]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className=" w-full lg:w-1/2">
            <div className="  bg-[url('../src/assets/ser1.png')] bg-cover bg-no-repeat bg-center lg:py-[140px] py-[50px] relative z-10 after:absolute after:top-0 after:left-0 after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                <div className="lg:ml-[116px]">
                    <h3 className='text-white lg:text-[36px] text-[24px] font-pops font-bold pb-[19px]'>Modern natural oil and gas refineries.</h3>
                    <a href="#" className='text-white font-pops lg:text-[16px] text-[14px] py-[12px] px-[25px] lg:py-[14px] lg:px-[30px] bg-[#F40404] font-semibold '>Learn More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="lg:flex lg:text-start text-center">
        <div className="w-full lg:w-1/2">
                <div className="  bg-[url('../src/assets/bal.png')] bg-cover bg-no-repeat bg-center  lg:py-[140px] py-[50px] relative z-10 after:absolute after:top-0 after:left-0 after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                    <div className="lg:ml-[116px]">
                        <h3 className='text-white lg:text-[36px] text-[24px] font-pops font-bold pb-[19px]'>Supply of national industries.</h3>
                        <a href="#" className='text-white font-pops lg:text-[16px] text-[14px] py-[12px] px-[25px] lg:py-[14px] lg:px-[30px] bg-[#F40404] font-semibold '>Learn More</a>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2">
            <div className="  bg-[url('../src/assets/ser2.png')] bg-cover bg-no-repeat bg-center lg:py-[140px] py-[50px] relative z-10 after:absolute after:top-0 after:left-0 after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                <div className="lg:ml-[116px]">
                    <h3 className='text-white lg:text-[36px] text-[24px] font-pops font-bold pb-[19px]'>National fuel distribution and supply.</h3>
                    <a href="#" className='text-white font-pops lg:text-[16px] text-[14px] py-[12px] px-[25px] lg:py-[14px] lg:px-[30px] bg-[#F40404] font-semibold '>Learn More</a>
                </div>
            </div>
        </div>
    </div>
   
   </>
    
  )
}

export default Service