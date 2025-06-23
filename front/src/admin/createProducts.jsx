import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAllProducts } from '../actions/ProductAction'


const createProducts = () => {
    const {register, handleSubmit}= useForm()
    const navigate=useNavigate()
    const dispatch= useDispatch()

    const handleCreateProduct=(product)=>{
        product.id= nanoid()
        dispatch(fetchAllProducts(product))
        navigate("/")
    }



  return (
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[90.5vh]'>
        <form action="" className='w-screen flex flex-col justify-center gap-5 items-center p-5' onSubmit={handleSubmit(handleCreateProduct)}>
            <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("image")} type="url" placeholder='Put Image URL' />
            <input className='border-b-2 p-2 rounded text-sm lg:w-1/3 w-full' {...register("title")} type="text" placeholder='Enter Product name' />
            <input className='border-b-2 p-2 rounded text-sm  lg:w-1/3 w-full' {...register("price")} type="number" placeholder='Enter Price' />
            <input className='border-b-2 p-2 rounded text-sm  lg:w-1/3 w-full' {...register("catagory")} type="text" placeholder='Enter Catagory' />
            <textarea className='border-b-2  rounded text-sm lg:w-1/3 w-full ' {...register("description")} placeholder='Tell Description...'>
            </textarea>
            <button className='border border-black p-3 rounded outline text-white'>Create Product</button>
        </form>
    </div>
  )
}

export default createProducts