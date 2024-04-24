import React from 'react'
import image from '../Assets/footer1.png'

function Footer() {
  return (
    <div className='footer h-[400] flex bg-green-dark text-white font-montserrat text-left'>
        {/* image */}
        <div className='footer_img'>
            <img className='object-cover h-400' src={image} alt='a table topped with bowls of food and flowers in the center.'/>
        </div>

        {/* contact info and work hours */}
        <div className='footer_info w-2/3 p-5'>
          <div className='footer_info_logo my-5'>
            <h5 className='font-bold py-5 text-2xl'>Afya Bora<br/>
            Food and Nutrition</h5>
            <h2 className='text-5xl font-bold'> Get in touch </h2>
          </div>

          <div className='contact flex justify-between items-center'>
            <div className='contact_info pb-6 w-1/2'>
              <address>Membley Estate <br/> Kiambu County <br/> Kenya</address>
              <p>Telephone:(+254)797493262</p>
              <p>kimanifaithw@gmail.com</p>
            </div>
            <div className='work_hours w-1/2'>
              <h5 className ='mb-2 text-2xl font-bold'>Office Hours</h5>
              <ul className='flex flex-col'>
                <li>Monday: 8am – 7pm</li>
                <li>Tuesday: 8am – 7pm</li>
                <li>Wednesday: 8am – 7pm</li>
                <li>Thursday: 8am – 7pm</li>
                <li>Friday: 8am – 7pm</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Footer