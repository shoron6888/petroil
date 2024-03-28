import React from 'react'

const Galreuseable = ({Gal}) => {
  return (
    <div className="lg:w-[24%] w-1/2">
        <img src={Gal}  className='w-full lg:px-0 lg:py-0 px-[5px] py-[10px]' alt="" />
    </div>
  )
}

export default Galreuseable