import React from 'react'
import ReviewCard from '../Components/ReviewCard'

function Reviews() {
  return (
    <div className='testimonials h-full text-center align-center p-14 items-center justify-center cursor-pointer'>
      <h1 className='testimonial_header text-5xl p-20 font-bold text-green-dark font-montserrat mb-4 pb-4'>Our track record</h1>
      <div className='testimonials_container flex flex-row m- mx-auto gap-8 group'>
        <ReviewCard testimonial="FYG has been a game-changer for my health journey! I used to feel lost in a sea of generic advice, but FYG's AI tailors everything to my needs. The delicious Kenyan recipes with local ingredients are a bonus – I'm eating healthier and feeling more energized than ever!" author="Sarah M." png="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" />
        <ReviewCard testimonial="FYG has been a game-changer for my health journey! I used to feel lost in a sea of generic advice, but FYG's AI tailors everything to my needs. The delicious Kenyan recipes with local ingredients are a bonus – I'm eating healthier and feeling more energized than ever!" author="Sarah M." png="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" />
        <ReviewCard testimonial="FYG has been a game-changer for my health journey! I used to feel lost in a sea of generic advice, but FYG's AI tailors everything to my needs. The delicious Kenyan recipes with local ingredients are a bonus – I'm eating healthier and feeling more energized than ever!" author="Sarah M." png="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" />
      </div>
    </div>
  )
}

export default Reviews