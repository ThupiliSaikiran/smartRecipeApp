import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer 
    className='bg-gray-800 text-gray-700 py-8  border-t border-orange-200'
    
    >
     
      <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left'>
        <div className='mb-4 sm:mb-0'>
          <h2 className='text-xl font-bold text-orange-600'>Recipe Finder 🍳</h2>
          <p
          className='text-sm text-gray-500'
          > Discover, cook, and enjoy delicious recipes every day.</p>
        </div>
         
         

      
      
        <div className="flex space-x-6 text-sm text-gray-400 font-medium">
          <a href="/">Home</a>
          <a href="/favorites">Favorites</a>
          <a href="#About">About</a>
          
        </div>
       <div className="mt-4 sm:mt-0 text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="font-semibold text-orange-600">Sai Kiran</span>. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer