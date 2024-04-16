import React from 'react'


function FeatureCard({icon, heading, paragraph}) {
  return (
    <div className='feature_card flex flex-col'>
        <div className='feature_card_icon'>{icon}</div>
        <div className="feature_card_heading">{heading}</div>
        <div className="feature_card_about">{paragraph}</div>
    </div>
  )
}

export default FeatureCard