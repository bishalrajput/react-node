import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
        <nav className='px-12 flex justify-between item-center h-[5rem] bg-green-700 text-white'>
            <div className='text-3xl front-bold grid place-item-center'>
              Logo  
            </div>
            <ul className='flex gap-4 '>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/services'>Services</Link></li>
            </ul>
            <div className='flex gap-4'>
                <button className='hover:bg-green-700 p-2 px-4 rounded-md bg-red-500'> Sign up</button>
                <button className='hover:bg-green-700 p-2 px-4 rounded-md bg-green-500'> Register</button>

            </div>

        </nav>
    
  )
}

export default Navbar