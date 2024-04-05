import React from 'react'

const AboutContentCard = ({png_link, header, section_content,png_alt, flex_dir, img_class}) => {
  return (
    <div className= {`flex ${flex_dir} bg-green-light align-center p-14 items-center justify-center`}>
        <div className='w-1/2 text-left justify-between items-left px-6'>
            <h2 className= 'text-5xl font-bold text-green-dark font-montserrat mb-4 text-left pb-4'>{header}</h2>
            <img className= {`${img_class}`} src={png_link} alt={png_alt}/>
        </div>
        <div className='w-1/2 flex '>
            <p className='text-green-dark font-light text-2xl leading-normal text-left px-2'>{section_content}</p>
        </div>
    </div>
  )
}

export default AboutContentCard