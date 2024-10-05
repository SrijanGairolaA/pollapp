import React from 'react'
import imgg from '../assets/pepe.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { info } from '../store/infoSlice'
import { incAge, incGender, incReligon } from '../store/pollSlice'
import {y,n} from '../store/ynSlice'




const Posts = () => {
const dispatch = useDispatch()
const state = useSelector((state)=> state.info.status)
const userAge = useSelector((state)=>state.linfo.age)
const userGender = useSelector((state)=> state.linfo.gender)
const userReligon = useSelector((state)=> state.linfo.religon)

const aboutpoll = ()=>{
  dispatch(info())
  console.log(state)
}
const onYes =()=>{
dispatch(y())
}
const onNo =()=>{
  dispatch(n())
}






  return (
    <div className=' bg-orange-200  w-3/4 ml-24 shadow-lg'>
  <div className='flex'>
   <span className='w-10 ml-2 mt-2'>
    <img src={imgg} className=''/>
    </span>

    <div className=' ml-5 mt-2 flex justify-center items-center'>
      <div>@User007</div>
    </div> 

    <div className='bg-violet-600 ml-auto flex mr-4 mt-3 rounded-lg text-white'>
      <button onClick={aboutpoll}  className=''>Info</button>
    </div>
</div>

<div className=' mt-5'>hello this is chacking poll/post just want ur review 
  do you like the application? if yes click the yes button , if no click the no button your review is very important
  so be carefull while voting! it will help us for analiysing the data 
</div>

<div className=' mt-5'>
<button onClick={onYes} className='bg-red-600 text-white ml-5 rounded-lg'>Yes</button>
<button onClick={onNo} className='bg-blue-600 text-white ml-5 rounded-lg'>No</button>
</div>


    
    </div>
  )
}

export default Posts
