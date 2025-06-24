import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import {useForm} from 'react-hook-form'
import { Link, useNavigate} from 'react-router-dom'
import {signUpUser } from '../actions/UserAction'
import {useDispatch,useSelector} from 'react-redux'

const Signup = () => {
  const {register, handleSubmit}= useForm()
  const navigate= useNavigate()
  const dispatch= useDispatch()


  const formSubmitHandler=(user)=>{
    user.id= nanoid()
    user.isAdmin= true;
    user.cart=[]
    dispatch(signUpUser(user))
    navigate("/signin")
    console.log(user);
  }

  return (
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[92vh]'>
      <form className='w-screen flex flex-col gap-3 items-center p-5 ' action="" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className='flex items-center gap-5 font-[montserrat]'>
          <label htmlFor="" className='text-white flex items-center gap-2'>
              <h1 className='lg:text-xl text-xl'>Male</h1>
               <input value="Male" className=''{...register("gender")} type="radio"/>
          </label>
          <label htmlFor="" className='flex text-white items-center gap-2'>
            <h1 className='text-xl'> Female</h1>
               <input value="Female" className='' {...register("gender")} type="radio"/>
          </label>
          </div>
        <input className='rounded text-sm border-b-2 p-2 border-black lg:w-1/3 w-full' {...register("image")} type="url" placeholder='Show your photo' />
          <input className='rounded border-b-2 p-2 text-sm border-black lg:w-1/3 w-full' {...register("username",{required:true})} type="text" placeholder='Enter username' />
          <input className='rounded border-b-2 p-2 text-sm border-black lg:w-1/3 w-full' {...register("email")} type="email" placeholder='Enter email' />
          <input className='rounded border-b-2 p-2 text-sm border-black lg:w-1/3 w-full' {...register("password")} type="password" placeholder='Enter password' />
         
          <div className='flex gap-3 items-center'>
           <button className='px-3 py-2 bg-red-500 rounded text-sm text-white lg:px-4 lg:py-2.5 font-[poppins]'>Submit</button>
           <p className='lg:text-xl text-[12px] flex gap-1 text-white'>Already have an Account?<Link to='/signin' className='text-blue-500'>Signin</Link></p>
          </div>
      </form>
    </div>
  )
}

export default Signup