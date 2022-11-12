import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import {IoIosArrowForward} from "react-icons/io"; 

import logo from '../assets/pinterestlogo.png'

const Sidebar = ( {user, closeToggle}) => {
  return (
    <div className='flex w-full bg-gray-800 dark:bg-black'>
        <div className='flex flex-col w-full h-full'>
            <div className='flex flex-row justify-between items-center p-2'>
                <Link to="/" className="flex flex-row items-center">
                    <img src={logo} alt="logo" className="h-12 w-12 ml-2"/>
                    <span className="text-gray-700 dark:text-gray-200 text-xl font-bold">PINTEREST</span>
                </Link>
               
            </div>
        </div>
    </div>
  )
}

export default Sidebar