import React from 'react'
import logo from "../assets/Logo1.png"
import logo2 from "../assets/Logo2.png"
import logo3 from "../assets/Logo3.png"
import logo4 from "../assets/Logo4.png"

const Logo = () => {
  return (
    <>
    <div className="max-w-container mx-auto flex flex-wrap justify-between lg:py-[117px] py-[60px]">
        <div className="w-1/2 lg:w-1/4">
            <img src={logo} alt="" />
        </div>
        <div className="w-1/2 lg:w-1/4">
            <img src={logo2} alt="" />
        </div>
        <div className="w-1/2 lg:w-1/4">
            <img src={logo3} alt="" />
        </div>
        <div className="w-1/2 lg:w-1/4">
            <img src={logo4}  alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Logo