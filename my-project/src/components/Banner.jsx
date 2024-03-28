import React from 'react'

const Banner = () => {
  return (
    <>
    <div className="bg-[url('../src/assets/banner.png')] bg-no-repeat bg-center bg-cover py-[100px] lg:py-[257px] z-10  relative after:absolute after:-z-10  after:top-[0] after:left-0 after:contents[''] after:w-full  after:h-full after:bg-[rgba(0,0,0,0.58)] ">
        <div className="max-w-container mx-auto lg:text-start text-center ">
            <div className=" lg:w-2/3 ">
                <h1 className='lg:text-[64px] text-[34px] font-bold text-white font-pops pb-[34px]'>We exist since 1975 on the oil and gas industry.</h1>
                <a href="#" className='lg:text-[16px]  font-semibold text-white font-pops py-[10px] px-[30px] lg:py-[13px] lg:px-[40px] bg-navbg '>LEARN MORE</a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Banner 