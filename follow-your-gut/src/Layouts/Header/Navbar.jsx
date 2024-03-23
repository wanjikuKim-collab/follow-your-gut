import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='mx-2'>
        <ul className='list-style-none ml-auto flex flex-col pl-0 lg:flex-row items-center justify-end'>
            <li className='my-4  lg:pr-2'>
                <Link className={`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark hover:[&.active]:text-gray-700`}
                aria-current="page" to="/">Home</Link>
            </li>
            <li className='my-4  lg:pr-2'>
                <Link className= {`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark hover:[&.active]:text-gray-700`}
                aria-current="page" to="/assessment">Assessment</Link>
            </li>
            <li className='my-4 lg:pr-2'>
                <Link className={`active disabled:text-black/30 lg:px-4 lg:[&.active]:text-base [&.active]:font-semibold [&.active]:text-green-dark hover:[&.active]:text-gray-700"}`}
                aria-current="page" to="/output">Meal Plan</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar