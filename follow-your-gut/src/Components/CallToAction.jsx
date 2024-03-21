import React from 'react'

const CallToAction = ({bg_color, text_color, width}) => {
    return(
        <button className={`${bg_color} ${width} hover:bg-green-700 ${text_color} text-lg font-bold py-2 my-6 px-4 rounded-xl shadow-md md:px-8 capitalize`}>
              Get My Meal Plans
        </button>
    )

}

export default CallToAction