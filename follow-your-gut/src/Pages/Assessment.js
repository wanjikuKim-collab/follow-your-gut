import React from 'react'
import assessment_img from '../Assets/assessment_form.png'
import AssessmentForm from '../Components/AssessmentForm'

const Assessment = ({onSubmit}) => {
  return (
    <div className='assessment mt-10 h-full flex flex-col md:flex-row' id='assessment'>
        <div className='assessment_image_container flex flex-col md:text-left justify-between px-6 pb-8 md:w-1/2 '>
            <h2 className='assessment_header text-3xl font-bold text-green-dark font-montserrat mb-4 md:text-5xl'>Assessment Form</h2>
            <img className='assessment_png  block max-w-full h-full object-cover rounded-lg sm:hidden' src={assessment_img} alt='This shows a man dressing his slad'/>
        </div>
        <div className='assessment_form_container md:w-1/2'>
          <AssessmentForm onSubmit={onSubmit}/>
        </div>
        
    </div>
  )
}

export default Assessment