import React from 'react'

const Bllog = () => {
    return (
        <>
            <div className=" bg-[#F0F0F0] lg:pt-[110px] pt-[60px] lg:pb-[162px] pb-[70px]">
                <div className="max-w-container mx-auto lg:flex lg:justify-between lg:text-start text-center lg:gap-6   ">
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[url('../src/assets/blog.png')] bg-cover bg-no-repeat bg-center pt-[75px] pb-[55px] relative z-10 after:absolute after:bottom-0 after:left-[0] after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                            <div className="">
                                <h4 className=' text-[white] text-[24px] font-pops font-bold pb-[52px] mx-[44px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                                <a href="#" className='text-[12px] font-pops font-semibold py-[10px] px-[22px] text-[white] bg-[#ffffff7e] mx-[44px]'>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:py-[0] py-[10px]">
                        <div className="bg-[url('../src/assets/blog2.png')] bg-cover bg-no-repeat bg-center pt-[75px] pb-[55px] relative z-10 after:absolute after:bottom-0 after:left-[0] after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                            <div className="">
                                <h4 className=' text-[white] text-[24px] font-pops font-bold pb-[52px] mx-[44px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                                <a href="#" className='text-[12px] font-pops font-semibold py-[10px] px-[22px] text-[white] bg-[#ffffff7e] mx-[44px]'>Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                        <div className="bg-[url('../src/assets/blog3.png')] bg-cover bg-no-repeat bg-center pt-[75px] pb-[55px] relative z-10 after:absolute after:bottom-0 after:left-[0] after:contents-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.49)] after:-z-10 ">
                            <div className="">
                                <h4 className=' text-[white] text-[24px] font-pops font-bold pb-[52px] mx-[44px] w-[249px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                                <a href="#" className='text-[12px] font-pops font-semibold py-[10px] px-[22px] text-[white] bg-[#ffffff7e] mx-[44px]'>Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bllog