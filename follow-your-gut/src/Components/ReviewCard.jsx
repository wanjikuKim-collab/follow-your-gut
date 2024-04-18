import React from 'react'

function ReviewCard({testimonial, author, png}) {
  return (
    <div className='testimonial_card rounded-xl p-8 bg-green-light mix-blend-luminosity group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 duration-500'>
        <i className='testimonail_card_icon'></i>
        <p className="testimonial_card_content text-green-dark my-3 tracking-wide text-xl font-light opacity-50">{testimonial}</p>
        <div className="avatar">
          <img class="w-20 h-20 mx-auto rounded-full" src={png} alt="user avatar" height="220" width="220" loading="lazy"/>
          <span className='text-xl text-green-dark font-montserrat font-bold'>{author}</span>
        </div>

    </div>
  )
}

export default ReviewCard