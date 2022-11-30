import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import {Navbar, Search, Feed, CreatePin, PinDetail} from '../components'

const Pins = ({user}) => {
  const [searchTerm, setSearchTerm] = useState('')



  return (
    <div className='px-2 md:px-5 dark:text-gray-100 '>
      <div className=''>
        <Navbar searchItem={searchTerm} setSearchItem={setSearchTerm} user = {user}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/create-pin' element={<CreatePin user = {user}/>} />
          <Route path='/pin-detail/:pinId' element={<PinDetail user={user} />} />
          <Route path='/category/:categoryId' element={<Feed/>} />
          <Route path='/search' element={<Search searchTerm= {searchTerm} setSearchItem = {setSearchTerm} />} />
        </Routes>

      </div>
    </div>
  )
}

export default Pins