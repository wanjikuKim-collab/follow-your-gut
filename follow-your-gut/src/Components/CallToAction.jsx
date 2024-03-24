import React from 'react'
import { HashLink } from 'react-router-hash-link'

const CallToAction = ({bg_color, text_color, width}) => {
    
    return(
        <HashLink  to='#assessment' className={`${bg_color} ${width} hover:bg-green-700 ${text_color} text-lg font-bold py-2 my-6 px-4 rounded-xl shadow-md md:px-8 capitalize text-center`}>
              Get My Meal Plans
        </HashLink>
    )

}

export default CallToAction