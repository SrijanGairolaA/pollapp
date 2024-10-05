import React, { useState } from 'react'
import imgg from '../assets/pepe.jpg'
import { useSelector } from 'react-redux'
const Profile = () => {
  const userName = useSelector((state)=> state.linfo.name)
  const [state, setState] = useState(false)

  

  return (
<div className='flex'>
  <div className='w-1/4 h-screen'></div>
  
  <div className='w-2/4 shadow-lg'>
 
    <div className='bg-violet-600 h-40 mt-5 flex items-center shadow-xl opacity-90'>
      <div className='ml-5'>
        <img src={imgg} className='w-20 rounded-full' />
      </div>

      <div className='ml-5 text-2xl text-white'>
        @{userName}
      </div>
    </div>
  
    <div className='flex'>
      <div className=' text-violet-600 w-1/2 flex justify-center shadow-xl'>
      <button onClick={()=>{setState(true)}}
      >Posts</button>
      </div>
      <div className=' text-violet-600 w-1/2 flex justify-center shadow-xl'>
      <button onClick={()=>{setState(false)}}
      >Polls</button>
      </div>
     </div>
     <div className=' flex justify-center items-center h-96 text-4xl'>
      {state? 
      (<div>No Posts Yet!</div>):
      (<div>No Voted Polls!</div>)}
     </div>
  </div>
  
  <div className='w-1/4'></div>
</div>

  
  
  )
}

export default Profile
