import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const LooginPage = () => {
    const navigate = useNavigate()
const logpage = ()=>{
    navigate('/login')
}

const authStatus = useSelector(state => state.auth.status)
console.log(authStatus)
  return (
    <div>
      <button
      onClick={logpage}
      >
        Login
      </button>
    </div>
  )
}

export default LooginPage
