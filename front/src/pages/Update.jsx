import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateProducts } from '../actions/ProductAction'


const Update = () => {
  const {id}=useParams()
  
  const productData= useSelector(state=>state.product.products) 
 
  const product= productData?.find(pro=> pro.id == id)
  const { register, handleSubmit, reset } = useForm({
    defaultValues:{
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    }
  });


   const navigate=useNavigate()
   const dispatch= useDispatch()

   const UpdateHandler=(product)=>{
    dispatch(updateProducts(id,product))
    localStorage.setItem("product", JSON.stringify(product))
    navigate("/")
   }

  return (
    <div className='w-screen flex flex-col justify-center gap-5 items-center bg-slate-950 h-[92vh]'>
       <form action="" className='w-screen flex flex-col justify-center gap-5 items-center p-5' onSubmit={handleSubmit(UpdateHandler)}>
            <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("image")} type="url" placeholder='Put Image URL' />
            <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("title")} type="text" placeholder='Enter Product name' />
            <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("price")} type="text" placeholder='Enter Price' />
            <input className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("category")} type="text" placeholder='Enter Catagory' />
            <textarea className='border-b-2 rounded p-2 text-sm lg:w-1/3 w-full ' {...register("description")} placeholder='Tell Description...'>
            </textarea>
            <button className='border text-white bg-black border-black p-3 rounded outline hover:bg-white hover:outline hover:text-black'>Update Product</button>
        </form>
    </div>
  )
}

export default Update