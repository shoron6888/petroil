import React from 'react'

const Company = () => {
    return (
        <>
            <div className="bg-[#F0F0F0]">

                <div className="max-w-container mx-auto lg:flex lg:py-[136px] py-[50px]">

                    <div className="w-full lg:w-1/3 bg-[#F40404] lg:py-[100px] py-[60px] lg:px-[74px] text-center">
                        <h3 className='text-[36px] text-white font-pops font-bold'>Learn more about our company</h3>
                    </div>
                    <div className=" w-full lg:w-2/3">
                        <div className=" bg-[url('../src/assets/com.png')] bg-cover bg-no-repeat bg-center lg:pt-[168px] pt-[100px] pb-[110px] lg:pb-[170px] text-center">
                            <a href="#" className='text-[16px] text-[#F40404] font-pops  font-semibold  py-[14px] px-[30px] bg-[#FFFFFF]'>Learn More</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Company