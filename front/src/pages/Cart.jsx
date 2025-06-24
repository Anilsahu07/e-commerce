import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtheQuantity, removeFromtheCart, removetheQuantity } from '../features/UserSlice'
import { toast } from 'react-toastify'


const Cart = () => {
    const cart= useSelector(state=> state.user.user)
    console.log(cart);
    
    const dispatch= useDispatch()

     const addQuantity=(id)=>{
     const exist= cart.cart.find(e=>e.id===id)
     dispatch(addtheQuantity(exist))
     }

     const removeQuantity=(id)=>{
        const isExist= cart.cart.find(e=>e.id===id)
        dispatch(removetheQuantity(isExist))
     }


     const removeFromCart=(id)=>{
      dispatch(removeFromtheCart(id))
      toast.success("Removed from the Cart")
     }


  return (
    <div className=' flex flex-wrap gap-5 p-5 items-center w-screen justify-center'>
        {cart.cart.length===0?<p className='text-center text-2xl font-semibold w-full flex items-center justify-center'>No Product Added in the Cart</p>:cart?.cart?.map((e,i)=>(
          <ul key={i} className=' border flex h-fit text-center justify-center lg:w-fit flex-wrap outline rounded-2xl mt-5'>
              <li className=' h-fit flex flex-col items-center p-2 gap-2 font-[montserrat] break-all'>
                <img className='w-1/2 h-40 rounded' src={e.image}/> 
                <h2 className='flex flex-col text-3xl font-semibold'>{e.title.slice(0,27)}</h2>
                <h1 className='flex items-center gap-2 font-semibold'> <strong className='text-xl font-normal'>Quantity:</strong> {e.quantity}</h1>
                <h1 className='flex items-center gap-2 font-semibold'><strong className='text-xl font-normal'>Total Price:</strong>₹{e.totalPrice}</h1>
                <div className='w-full flex justify-center gap-4 break-all'>
                  <button className=' text-blue-500 font-semibold lg:text-xl text-sm' onClick={()=>addQuantity(e.id)}>Add Quantity</button>
                  <button className=' text-green-600 font-semibold lg:text-xl text-sm' onClick={()=>removeQuantity(e.id)}>Remove Quantity</button>
                </div>
                <div>
                  <button onClick={()=>removeFromCart(e.id)} className='lg:px-3 lg:py-2 px-2 py-1 bg-yellow-600 rounded text-white active:scale-95 mt-3'>Remove from Cart</button>
                </div>
              </li>
          </ul>
      ))}
    </div>
  )
}

export default Cart