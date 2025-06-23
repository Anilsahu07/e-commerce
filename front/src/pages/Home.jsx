import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteProduct,getProduct} from '../actions/ProductAction'
import { Link, useNavigate } from 'react-router-dom'
import { addToCartFunctionality } from '../features/UserSlice'

const Home = () => {
  const products= useSelector(state=>state.product.products)  
  
  const dispatch= useDispatch()
  const navigate=useNavigate()
  const [toggle, settoggle] = useState(false)
  

const deleteHandle=(id)=>{
  dispatch(deleteProduct(id))
}

useEffect(() => {
  dispatch(getProduct()); 
}, [dispatch]);

const handleToggle=(id)=>{
  settoggle(toggle===id? null:id)
}

const UpdateHandle=(id)=>{
 navigate(`/update/${id}`)
}

const addToCart=(id)=>{
 const productData= products.find(pro=> pro.id ===id) 
 if (productData) {
  dispatch(addToCartFunctionality(productData))
 }
 navigate("/")
}


return(
    <div className=" gap-4 flex flex-col items-center justify-center p-2">
        <div className='flex justify-center w-full text-center'>
         <h1 className='text-2xl font-[montserra]'>
          PURCHASE YOUR PRODUCTS !!
         </h1>
        </div>
        <div className=' flex justify-center items-center flex-wrap gap-3 mt-5'>
          {products.length===0? "Loading":
            products.map((pro,index)=>(
              <div key={index} className='flex flex-col items-center lg:w-[250px] text-center p-2 rounded-xl gap-3 font-[montserrat] bg-slate-300 hover:scale-95 transition-all duration-200 justify-center'>
                <img className='lg:w-full h-1/2 lg:h-32 w-full rounded' src={pro.image} alt="error" />
                <h1 className='font-semibold text-4xl flex flex-wrap'>{pro.title.slice(0,20)}</h1>
                <p className='text-xl font-semibold mt-2'>{pro.price}$</p>
                <p className='font-medium text-2xl font-[poppins]'>{pro.category}</p>
                
                {toggle===pro.id && <p className='text-[17px]'>{pro.description.slice(0,80)}</p>}
                <div className='flex justify-around w-full mt-3 items-center'>
                  <button onClick={()=>deleteHandle(pro.id)} className='lg:px-3 lg:py-2 px-2 py-1 bg-red-500 text-white rounded text-sm'>Delete</button>
                  <button onClick={()=>UpdateHandle(pro.id)} className='lg:px-3 lg:py-2 px-2 py-1 bg-pink-500 text-white text-sm lg:font-medium rounded'>Edit</button>
                  <Link onClick={()=>addToCart(pro.id)} to={`/cart`} className='lg:px-3 lg:py-2 px-2 py-1 bg-purple-500 text-white rounded text-sm'>Add to Cart</Link>
                </div>
                <button className='font-[poppins] text-blue-500 font-semibold' onClick={()=>handleToggle(pro.id)}>
                  {toggle=== pro.id? "Less":"More"}
                </button>
              </div>
            ))
          }
      </div>
    </div>
  )
}

export default Home