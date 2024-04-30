import React from 'react'


function FeatureCard({icon, heading, paragraph,bg_color}) {
  return (
    <div className={`feature_card flex flex-col justify-between items-center rounded-lg p-4 m-2 mb-5 bg-gray-light hover:bg-gray-dark`}>
        <p className={`feature_card_icon text-yellow-400 text-3xl bg-white p-2 rounded-full`}>{icon}</p> <br/>
        <h2 className={`feature_card_heading text-green-dark font-bold font-montserrat mb-2 text-xl text-center`}>{heading}</h2><br/>
        <p className={`feature_card_about text-green-dark mb-6 tracking-wide text-lg md:text-xl`}>{paragraph}</p>
    </div>
  )
}

export default FeatureCard