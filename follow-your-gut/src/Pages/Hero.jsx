import React from 'react'
import hero_image from '../Assets/hero.png'

const Hero = () => {
  return (
    <div>
        <div className="hero_title">
            <h1>Follow Your Gut</h1>
            <p>The gut is responsible for 70-80% of our immunity. Healing it is healing <span>YOU</span>.</p>
            <button>Get My Meal Plans</button>
        </div>
        <div className='hero_image'>
            <img src={hero_image} alt="This shows a wooden cutting board filled with a variety of colorful foods such as cured meats,cheeses, fruits, nuts and breads, typically served as an appetizer or snack" />
        </div>
    </div>
  )
}

export default Hero