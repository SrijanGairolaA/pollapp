import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

import LogOutBtn from './LogOutBtn'


const SideBar = () => {
  return (
    <div className='bg-violet-600 text-white
    h-screen
    w-1/6
    shadow-lg'>
      <Logo/>

   <div className='mt-20'>
   <div className='text-2xl 
    mt-10'>
    <Link 
    to='/home' 
    className='ml-16 
    mt-auto'>
    <i className="ri-home-7-line"
    ></i>
    Home
  </Link>
    </div>

      
    <div className='text-2xl 
    mt-10'>
    <Link 
    to='/profile' 
    className='ml-16 
    mt-auto'>
    <i className="ri-user-line"></i>
    Profile
  </Link>
    </div>

       
    <div className='text-2xl 
    mt-10'>
    <Link 
    to='/notification' 
    className='ml-16  mt-auto'
  >
    <i className="ri-notification-line"></i>
    Notification
  </Link>
    </div>

    <div className='text-2xl 
    mt-10'>
    <Link 
    to='/aboutus' 
    className='ml-16  mt-auto'
  >
   <i className="ri-question-line"></i>
    About Us
  </Link>
    </div>

      
    <div className='text-2xl 
    mt-10'>
    <Link 
    to='/more' 
    className='ml-16  mt-auto'
  >
    <i className="ri-more-2-fill"></i>
    More
  </Link>
    </div>

   
   </div>
   <LogOutBtn/>
    </div>
  )
}

export default SideBar
