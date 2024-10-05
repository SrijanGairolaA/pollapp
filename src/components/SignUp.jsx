import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { incAge, incGender, incReligon } from '../store/pollSlice';
import { useNavigate } from 'react-router';
import { setUserInfo } from '../store/loginInfoSlice';
import Logo from './Logo';

const SignUp = () => {
    const { handleSubmit, register, control } = useForm();
    const dispatch = useDispatch();
  const navigate = useNavigate()
    const loginnn = async (data) => {
      
     
        dispatch(login());
        dispatch(incAge(Number(data.age)));         
        dispatch(incGender(data.gender.toLowerCase())); 
        dispatch(incReligon(data.religon.toLowerCase())); 
        console.log(data); 
        dispatch(setUserInfo(data))
        navigate('/home')
      
    };

  return (
    <div className=' bg-white flex justify-center items-center h-screen'>
  <div className=' bg-white h-4/5 w-96 shadow-xl rounded-lg'>
   <form  onSubmit={handleSubmit(loginnn)}>
   <label htmlFor="username">Username</label>
         <input
           type="text"
           id="username"
           {...register('username', { required: "Username is required" })}
         />

<label htmlFor="email">E-mail</label>
         <input className='border-black'
           type="text"
           id="email"
           {...register('email', {
             pattern: {
               value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
               message: "Invalid email format",
             },
           })}
         />

<label htmlFor="password">Password</label>
         <input className='border-black'
           type="password"
           id="password"
           {...register('password', { required: "Password is required" })}
         />

<label htmlFor="age">Age</label>
         <input
           type="number"
           id="age"
           {...register('age', { required: "Age is required" })}
         />

           <label htmlFor="gender">Gender</label>
         <input
           type="text"
           id="gender"
           {...register('gender', { required: "Gender is required" })}
         /> 
         
         <label htmlFor="religon">Religion</label>
         <input
           type="text"
           id="religon"
           {...register('religon', { required: "Religion is required" })}
         />

<button className='ml-40 bg-violet-600 mb-4 text-xl text-white rounded-lg' type="submit">Submit</button>


   </form>
   <DevTool control={control} />

  </div>
  <div className='bg-violet-600 h-4/5 w-96 flex justify-center items-center shadow-xl rounded-lg '>
<div className='-ml-7 -mt-16 w-3/5'
>  <Logo /></div>
</div>
</div>

  )
}

export default SignUp;
