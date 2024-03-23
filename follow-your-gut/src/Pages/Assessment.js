import React from 'react'
import assessment_img from '../Assets/assessment_form.png'
import AssessmentForm from '../Components/AssessmentForm'

const Assessment = ({onSubmit}) => {
  return (
    <div className='assessment my-10 h-full flex '>
        <div className='assessment_image_container flex flex-col text-left justify-between items-left px-6 pb-8 w-1/2 '>
            <h2 className='assessment_header text-2xl font-bold text-green-dark font-montserrat mb-4 md:text-5xl text-left'>Assessment Form</h2>
            <img className='assessment_png ' src={assessment_img} alt='This shows a man dressing his slad'/>
        </div>
        <div className='assessment_form_container w-1/2'>
          <AssessmentForm onSubmit={onSubmit}/>
        </div>
        
    </div>
  )
}

export default Assessment