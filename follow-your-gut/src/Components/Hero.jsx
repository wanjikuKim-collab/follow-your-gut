import React from 'react'
import hero_image from '../Assets/hero.png'
import CallToAction from './CallToAction'

const Hero = () => {
  return (
    <section>
      <div className='hero flex h-full md:flex-row'>
          <div className="hero_content flex flex-col justify-center items-left pl-6 pt-8 w-1/2">
              <h1 className='hero_title text-4xl font-bold text-green-dark font-montserrat mb-4 md:text-7xl text-left'> <span>Follow</span><br/> Your Gut</h1>
              <p className='hero_subtitle text-xl text-gray-600 text-left mb-6 md:tracking-wide md:text-2xl'>
                The gut is responsible for 70-80% of our immunity. Healing it is healing <span>YOU</span>.
              </p>
              <CallToAction text_color= "text-green-dark" bg_color= "bg-green-light w-1/2"/>
          </div>
          <div className='hero_image_container w-1/2 flex flex-col items-center justify-center'>
            <CallToAction text_color= "text-green-dark" bg_color= "bg-green-light" width= "w-1/2" />
            <div className='w-[600px] h-[500px]'>
              <img className='hero-image px-2 object-cover rounded-lg flex justify-center size-full' src={hero_image} alt="This shows a wooden cutting board filled with a variety of colorful foods such as cured meats,cheeses, fruits, nuts and breads, typically served as an appetizer or snack" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero