import React from 'react'
import gal1 from "../assets/g1.png"
import gal2 from "../assets/g2.png"
import gal3 from "../assets/g3.png"
import gal4 from "../assets/g4.png"
import Galreuseable from './reuseable/Galreuseable'

const Gallery = () => {
  return (
<>
        <div className="flex flex-wrap justify-between lg:pb-[20px]  ">
            <Galreuseable  Gal={gal1}/>
            <Galreuseable  Gal={gal2}/>
            <Galreuseable  Gal={gal3}/>
            <Galreuseable  Gal={gal4}/>
        </div>
    </>
  )
}

export default Gallery