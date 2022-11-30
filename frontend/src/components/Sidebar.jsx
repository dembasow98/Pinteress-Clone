import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import {IoIosArrowForward} from "react-icons/io"; 
//import the profile icon from react-icons
import { RiProfileFill } from 'react-icons/ri'
import { categories } from '../utils/data';

import logo from '../assets/pinterestlogo.png'

// const isActiveStyle = 'flex flex-row items-center extra-bold justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-700 dark:text-gray-200 dark:bg-gray-800'
// const isNotActiveStyle = 'flex flex-row items-center justify-center w-10 h-10 rounded-full text-gray-700 dark:text-gray-200'


const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-200 hover:text-gray-50 hover:font-bold transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-4 border-gray-50  transition-all duration-200 ease-in-out capitalize';

const Sidebar = ( {user, closeToggle}) => {

  const handleCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false)
    }
  }

  //categories 
  //Get the categories from the utils/data.js file

  
  return (
    <div className='flex bg-black w-full flex-col justify-between h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>

        <div className='cursor-pointer w-fit'>
          <Link 
            to="/" 
            onClick={handleCloseSidebar}
            className='flex flex-row items-center justify-start'
          >
            <img src={logo} alt="logo" className=" h-12 w-12"/>
            <p className="text-gray-700 dark:text-gray-50 text-xl font-extrabold">PINTEREST</p>
          </Link>
        </div>
       

        <div className='flex flex-col gap-2 mt-2'>
          <NavLink 
            to="/"
            className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill />
            Dashboard
          </NavLink>

          <h3 className='mt-5 mb-2 px-5 text-base 2xl:text-xl'>
            Discover Categories
          </h3>
          <div className='flex flex-col gap-4'>
          {categories.slice(0, categories.length - 1).map((category, index) => (
            <NavLink
              key={index}
              to={`category/${category.name}`}
              className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
            >
              <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" />
              {category.name}
            </NavLink>
          ))}
          </div>
        </div>
      </div>
      
        { user && (
          <Link  
            to ={`user-profile/${user?._id}`}
            className='flex flex-row my-5 items-center justify-start px-5 py-2 gap-3 text-gray-200 hover:text-gray-50 hover:font-bold transition-all duration-200 ease-in-out capitalize'
            onClick={handleCloseSidebar}
          >
            <img src={user?.image} alt="profile" className="h-8 w-8 ml-2 rounded-full" />
            {user?.username}
          </Link>

        )}
    
    </div>
  )
}

export default Sidebar