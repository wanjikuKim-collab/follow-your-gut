import React from 'react'
import hero_image from '../Assets/hero.png'
import CallToAction from './CallToAction'

const Hero = () => {
  return (
    <div className='hero flex min-h-screen md:flex-row'>
        <div className="hero_content w-1/2 flex flex-col justify-center items-left px-6 py-8 md:w-1/2 md:px-20">
            <h1 className='hero_title text-4xl font-bold text-green-dark font-montserrat mb-4 md:text-8xl text-left'>Follow Your Gut</h1>
            <p className='hero_subtitle text-xl text-gray-600 text-left mb-8 md:text-2xl'>
              The gut is responsible for 70-80% of our immunity. Healing it is healing <span>YOU</span>.
            </p>
            <CallToAction text_color= "text-green-dark" bg_color= "bg-green-light w-1/2"/>
        </div>
        <div className='hero_image_container w-1/2 flex flex-col items-center justify-center'>
          <CallToAction text_color= "text-green-dark" bg_color= "bg-green-light" width= "w-1/2" />
          <img className='hero-image px-2 object-contain rounded-lg flex justify-center h-2/3' src={hero_image} alt="This shows a wooden cutting board filled with a variety of colorful foods such as cured meats,cheeses, fruits, nuts and breads, typically served as an appetizer or snack" />
        </div>
    </div>
  )
}

export default Hero