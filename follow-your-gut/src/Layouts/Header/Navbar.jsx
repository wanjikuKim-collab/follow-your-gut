import React from 'react'
import {HashLink} from 'react-router-hash-link'

const Navbar = () => {
  return (
    <nav className='mx-2'>
        <ul className='list-style-none ml-auto flex flex-col pl-0 lg:flex-row items-center justify-end'>
            <li className='my-4  lg:pr-2'>
                <HashLink className={`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark transform ease-in-out hover:scale-110 hover:bg-lime-200 hover:p-2`}
                aria-current="page" to="#home">Home</HashLink>
            </li>
            <li className='my-4  lg:pr-2'>
                <HashLink className= {`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark  transform ease-in-out hover:scale-110 hover:bg-lime-200 hover:p-2`}
                aria-current="page" to="#assessment">Assessment</HashLink>
            </li>
            <li className='my-4 lg:pr-2'>
                <HashLink className={`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark transform ease-in-out hover:scale-110 hover:bg-lime-200 hover:p-2`}
                aria-current="page" to="#output">Meal Plan</HashLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar