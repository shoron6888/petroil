import React from 'react'

const Map = () => {
    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3649.9100540578024!2d90.36708377592915!3d23.82179728603059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1711184810942!5m2!1sen!2sbd" className='w-full  h-[450px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className="bg-[#F40404] py-[36px]">
                <div className="max-w-container mx-auto ">
                    <div className="lg:flex justify-between items-center  text-center">
                        <div className="lg:w-3/4 w-full ">
                            <h2 className='text-[36px] font-pops font-bold text-white'>Want to join as member branch in your area?</h2>
                        </div>
                        <div className="lg:w-1/6 w-full lg:mt-0 mt-[20px] lg:text-end">
                            <a href="#" className='text-[16px] font-semibold text-white px-[32px] py-[13px] border-[2px] hover:text-[#F40404] hover:bg-[white] duration-300 '>CONTACT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map