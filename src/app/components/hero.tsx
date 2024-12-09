import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (

  <div className="relative w-[1440] h-[716.83px]">
  <Image
    className="object-cover"
    src="/images/hero.jpg"
    alt="Banner"
    layout="fill" 
    quality={100}
  />
</div>

  )
}

export default Hero
