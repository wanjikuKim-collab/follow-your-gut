import React from 'react'
import hero_image from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero flex min-h-screen md:flex-row'>
        <div className="hero_content flex flex-col justify-centern items-center">
            <h1 className='hero_title'>Follow Your Gut</h1>
            <p className='hero_subtitle'>The gut is responsible for 70-80% of our immunity. Healing it is healing <span>YOU</span>.</p>
            <button>Get My Meal Plans</button>
        </div>
        <div className='hero_image h-5/6'>
            <img src={hero_image} alt="This shows a wooden cutting board filled with a variety of colorful foods such as cured meats,cheeses, fruits, nuts and breads, typically served as an appetizer or snack" />
        </div>
    </div>
  )
}

export default Hero