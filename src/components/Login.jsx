import React from 'react'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {login} from '../store/authSlice'
import { setUserInfo } from '../store/loginInfoSlice'



  const Login = () => {
       
        
     const {handleSubmit, register, control} = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const dispatch1 = useDispatch()

    const loginnn = async(data)=>{
      
        dispatch(login())
        dispatch1(setUserInfo(data))
        
        console.log(data)
    }
        



  return (
    <div>
      <form onSubmit={handleSubmit(loginnn)}>
        <label htmlFor='username'>Username</label>
        <input type="text" id='username' 
        {...register('username',{
            required: "required"
        })}
        />

        <label htmlFor='email'>E-mail</label>
        <input type="text" id='email'
        {...register('email',{
            pattern:{
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid"
            }
        })}
        />

<label htmlFor='email'>password</label>
<input type="text" id='password' 
        {...register('password',{
            required: "required"
        })}
        />

     

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default Login
