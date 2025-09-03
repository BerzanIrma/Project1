"use client";

import Image from 'next/image';

import CustomButton from './CustomButton';

export const Hero = () => {
const handleScroll = () => {

}

  return (
      <div className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
          Find Your Dream Car
          </h1>
          <p className="hero__subtitle">
            Discover the best deals on luxury cars, sports cars, and more.
          </p>



          <CustomButton
            title="Explore cars"
            containerStyles="bg-orange-500 text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/orange.svg" alt="orange background" fill className="object-contain absolute top-0 left-0 z-0 -translate-y-7 translate-x-16"
  />
            <Image src="/car.svg" alt="car" fill className="object-contain absolute top-0 left-0 z-0 -translate-y-5"/>
            

          </div>
        </div>
      </div>
  )
}

export default Hero