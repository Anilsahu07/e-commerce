import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../actions/ProductAction'

const Search = () => {
    const products= useSelector(state=>state.product.products)
    
   const dispatch= useDispatch()
   const [search, setsearch] = useState("")
    
  useEffect(() => {
    if (products.length ===0) {
      dispatch(getProduct())
    }
  }, [dispatch])

//   useEffect(() => {
//     JSON.parse(localStorage.getItem("product"))
//   }, [])

  useEffect(() => {
    localStorage.setItem("product",JSON.stringify(products))
  }, [])
  
   
  const filterSearchedProducts= products.filter(pro=>(
        [pro.title, pro.category, pro.price, pro.description].some(field=>(
            field.toString().toLowerCase().includes(search.toLowerCase())
        ))
    ))
    
    
  return (
    <div className='flex flex-col gap-7 w-screen items-center h-auto lg:p-3'>
        <div className='w-screen flex justify-center px-5 mt-3'>
            <input className='border lg:w-1/3 w-3/4 outline p-1 rounded' onChange={(e)=>setsearch(e.target.value)} type="text" placeholder='Search your products....'/>
        </div>
        <div className='w-screen flex flex-wrap justify-center p-4 gap-7'>
       {search?filterSearchedProducts.map(e=>(
            <ul key={e.id} className='w-[300px] flex flex-col items-center text-center p-4 gap-2 bg-yellow-300 rounded-xl font-[poppins]'>
                <img className='lg:w-full w-full h-56' src={e.image} alt="" />
                <h1 className='text-2xl font-bold mt-3 font-[montserrat]'>{e.title}</h1>
                <h1 className='text-xl font-light'>{e.price}</h1>
                <h1 className='text-xl font-semibold'>{e.category}</h1>
                <h1 className='text-xl'>{e.description.slice(0,80)}</h1>
            </ul>
        )):<p className='text-xl'>No Data Found !!</p>
       }
       </div>
    </div>
  )
}

export default Search