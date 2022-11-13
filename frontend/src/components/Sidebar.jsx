import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import {IoIosArrowForward} from "react-icons/io"; 
//import the profile icon from react-icons
import { RiProfileFill } from 'react-icons/ri'

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
  const categories = [
    {name: 'Following', icon: <IoIosArrowForward />, link: '/following'},
    {name: 'For you', icon: <IoIosArrowForward />, link: '/for-you'},
    {name: 'Trending', icon: <IoIosArrowForward />, link: '/trending'},
    {name: 'Food and drink', icon: <IoIosArrowForward />, link: '/food-and-drink'},
    {name: 'DIY and crafts', icon: <IoIosArrowForward />, link: '/diy-and-crafts'},
    {name: 'Travel', icon: <IoIosArrowForward />, link: '/travel'},
    {name: 'Beauty', icon: <IoIosArrowForward />, link: '/beauty'},
    {name: 'Home decor', icon: <IoIosArrowForward />, link: '/home-decor'},
    {name: 'Fashion', icon: <IoIosArrowForward />, link: '/fashion'},
    {name: 'Other', icon: <IoIosArrowForward />, link: '/others'},
  ];
  
  return (
    <div className='flex bg-black w-full flex-col justify-between h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <Link 
          to="/" 
          onClick={handleCloseSidebar}
          className='flex flex-row items-center justify-start'
        >
          <img src={logo} alt="logo" className=" h-12 w-12  cursor-pointer "/>
          <span className="text-gray-700 cursor-pointer dark:text-gray-50 text-xl font-extrabold">PINTEREST</span>
        </Link>
       

        <div className='flex flex-col gap-2 mt-2'>
          <NavLink 
            to="/"
            //if the navlink is active, add the active class, else add the not active class
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
              to={`category${category.link}`}
              className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
              onClick={handleCloseSidebar}
            >
              {category.icon}
              {category.name}
            </NavLink>
          ))}
          </div>
        </div>
      </div>
      
        { user && (

          <Link  
            to ={`user-profile/${user?.id}`}
            className='flex flex-row items-center justify-start px-5 py-2 gap-3 text-gray-200 hover:text-gray-50 hover:font-bold transition-all duration-200 ease-in-out capitalize'
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