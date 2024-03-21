import React from 'react'
import assessment_img from '../Assets/assessment_form.png'

const Assessment = () => {
  return (
    <div className='assessment'>
        <div className='assessment_image_container flex flex-col text-left justify-center items-left px-6 pb-8 md:w-1/2 md:px-20'>
            <h2 className='assessment_header text-2xl font-bold text-green-dark font-montserrat mb-4 md:text-5xl text-left'>Assessment Form</h2>
            <img className='assessment_png ' src={assessment_img} alt='This shows a man dressing his slad'/>
        </div>
        <div className='assessment_form_container w-1/2'></div>
        
    </div>
  )
}

export default Assessment