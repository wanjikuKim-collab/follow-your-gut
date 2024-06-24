import React from 'react'
import ReviewCard from '../Components/ReviewCard'

function Reviews() {
  return (
    <div className='testimonials h-full text-center p-6  cursor-pointer'>
      <h1 className='testimonial_header text-5xl p-10 font-bold text-green-dark font-montserrat mb-4 pb-10'>Our track record</h1>
      <div className='testimonials_container flex md:flex-row flex-col gap-8 group'>
        <ReviewCard 
          testimonial="FYG has been a game-changer for my health journey! I used to feel lost in a sea of generic advice, but FYG's AI tailors everything to my needs. The delicious Kenyan recipes with local ingredients are a bonus – I'm eating healthier and feeling more energized than ever!"
          author="Sarah M." 
          png="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" 
          />
        <ReviewCard 
          testimonial="As a busy professional, I don't have time to waste on figuring out what's best for my health. FYG takes the guesswork out of it. The AI-powered assessment gave me valuable insights, and the personalized meal plans make healthy eating effortless. I highly recommend FYG to anyone who wants to take control of their wellness." 
          author=" David K." 
          png="https://media.istockphoto.com/id/1822009439/photo/business-happy-and-walking-black-man-on-city-journey-commute-trip-and-real-estate-agent-smile.jpg?s=612x612&w=0&k=20&c=_gccD2xL9oSEUUCEzJG5mac2Pd1yN3y1fxZH1IuLygE="
          />
        <ReviewCard  
          testimonial="I've tried countless diet and fitness apps in the past, but none of them stuck. FYG is different – it feels like a personalized coach in my pocket! The app understands my preferences and keeps me motivated with its recommendations. Plus, the FYG grocery lists make shopping for healthy ingredients a breeze." 
          author="Aisha W." 
          png="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww" 
          />
      </div>
    </div>
  )
}

export default Reviews