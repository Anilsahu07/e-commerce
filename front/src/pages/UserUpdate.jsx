import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { updatedUsers } from '../actions/UserAction'

const UserUpdate = () => {
 const user= useSelector(state=>state.user.users)
 console.log(user);
 
 const dispatch=useDispatch()
 const navigate=useNavigate()
 const {id}=useParams()
 
 const userInfo= user.find(user=>user.id===id)
 
 const {register,handleSubmit}= useForm({
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
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[92vh]'>
      <form className='w-full flex flex-col gap-3 items-center p-3' action="" onSubmit={handleSubmit(updateUserHandler)}>
        <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("image")} type="url" placeholder='Show your photo' />
          <input className='rounded border-b-2 p-2 text-sm border-black lg:w-1/3 w-full' {...register("username")} type="text" placeholder='Enter username' />
          <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("email")} type="email" placeholder='Enter email' />
          <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full' {...register("password")} type="text" placeholder='Enter password' />
          <div className='flex gap-3 items-center'>
           <button className='px-3 py-2 bg-red-500 rounded text-white lg:px-4 lg:py-2.5'>Update</button>
          </div>
      </form>
    </div>
  )
}

export default UserUpdate