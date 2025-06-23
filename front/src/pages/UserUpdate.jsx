import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { updatedUsers } from '../actions/UserAction'

const UserUpdate = () => {
 const user= useSelector(state=>state.user.users)
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const {id}=useParams()
 const userInfo= user.find(user=>user.id===id)

 const {register,handleSubmit,reset}= useForm({
    defaultValues:{
        image:userInfo?.image,
        username:userInfo?.username,
        email:userInfo?.email,
        password:userInfo?.password,
    }
 })
    
 const updateUserHandler=(users)=>{
    dispatch(updatedUsers(users,id))
    navigate("/users")
 }
  return (
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[90.5vh]'>
      <form className='flex flex-col gap-3 items-center p-3' action="" onSubmit={handleSubmit(updateUserHandler)}>
        <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("image")} type="url" placeholder='Show your photo' />
          <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("username",{required:true})} type="text" placeholder='Enter username' />
          <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("email")} type="email" placeholder='Enter email' />
          <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-ful' {...register("password")} type="text" placeholder='Enter password' />
          <div className='flex gap-3 items-center'>
           <button className='px-3 py-2 bg-red-500 rounded text-white lg:px-4 lg:py-2.5'>Submit</button>
           <p className='lg:text-xl text-[12px] flex gap-1 text-white'>Already have an Account?<Link to='/signin' className='text-blue-500'>Signin</Link></p>
           
          </div>
      </form>
    </div>
  )
}

export default UserUpdate