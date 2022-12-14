import React from 'react'

import {Link, useNavigate} from 'react-router-dom'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'


const Navbar = ({searchTerm, setSearchTerm, user}) => {

    const navigate = useNavigate()

    //Get the value of the search input
    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }


    if(!user) {

       navigate('/login')
       return null
    }

  return (
    <div className="flex gap-2 md:gap-5 w-full mt-5 pb-7 ">
        <div className="flex justify-start items-center w-full px-2 rounded-md bg-white dark:bg-black border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="p-2 w-full bg-white dark:bg-black outline-none"
        />
        </div>
        <div className="flex gap-3 ">
            <Link  to ={`user-profile/${user?._id}`} className="hidden md:block">
                <img src={user?.image} alt="user-pic" className="w-14 h-12 rounded-full " />
            </Link>
            <Link to="/create-pin" className="bg-black dark:bg-green-700 text-white rounded-full w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
                <IoMdAdd />
            </Link> 
        </div>
    </div>
  )
}

export default Navbar