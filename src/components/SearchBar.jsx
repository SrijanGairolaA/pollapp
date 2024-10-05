import React from 'react'

import { useSelector } from 'react-redux'
import Info from './Info'
const SearchBar = () => {
const infoState = useSelector((state)=>state.info.status)
 
 if(infoState){
  return <Info/>

 }
 else{
return  <div className='w-2/6 bg-white flex items-center justify-center shadow-lg'>
<div className= 'bg-violet-600 text-white w-2/5 h-20 rounded-lg flex items-center justify-center'>
  Click Info
</div>
</div>
 }

 
}

export default SearchBar
