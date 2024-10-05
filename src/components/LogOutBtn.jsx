import React from 'react'
import { logout } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const LogOutBtn = () => {
const dispatch = useDispatch()
const navigate = useNavigate()

const LogOut = ()=>{
dispatch(logout())
navigate('/')
}

  return (
    <button className='
    bg-white
    text-violet-600
    ml-20
    mt-16
    h-14
    rounded-2xl
    bg-
    w-24'
    onClick={LogOut}
    >
     Log out
    </button>
  )
}

export default LogOutBtn
