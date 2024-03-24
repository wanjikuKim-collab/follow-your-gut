import React from 'react'

const AboutContentCard = ({png_link, header, section_content,png_alt, flex_dir}) => {
  return (
    <div className= {`flex flex-col ${flex_dir}`}>
        <div className='w/1/2'>
            <h2>{header}</h2>
            <img src={png_link} alt={png_alt}/>
        </div>
        <div className='w-1/2'>
            <p>{section_content}</p>
        </div>
    </div>
  )
}

export default AboutContentCard