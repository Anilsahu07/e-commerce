import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const user= useSelector(state=>(state.user.user))
    console.log(user.cart);
    
  return (
    <div className='w-screen h-[92vh] flex justify-center items-center flex-wrap p-3 lg:bg-white bg-black'>
       {user &&
        <div className='w-fit flex flex-col items-center gap-3 text-center '>
            <img className='lg:w-56 lg:h-56 w-52 h-52 rounded-full outline lg:outline-red-400 outline-blue-500 lg:object-cover object-cover' src={user.image} alt="" />
            <h1 className='text-2xl font-normal text-pink-500 mt-3 font-[poppins]'>{user.gender}</h1>
            <h1 className='text-4xl font-[montserrat] font-semibold lg:text-black text-white'>{user.username}</h1>
            <h1 className='text-xl font-[montserrat] text-blue-600 mt-2'>{user.email}</h1>
            <h1 className='text-2xl'>{"*".repeat(user.password.length)}</h1>
            <h2 className='mt-3 text-2xl w-full underline text-white lg:text-black lg:outline-black'>Product Added in Cart</h2>
            {
                user.cart && user.cart.length>0 ?(
                    <div className='flex flex-col gap-1 lg:w-scree'>
                        {user.cart.map(u=>(
                        <li className='text-white font-[montserrat] text-[16px]'>{u.title}</li>
                        ))}
                    </div>
               ):(
                <p>No Product Added in Cart</p>
            )  
        }
        </div>
       }
    </div>
  )
}

export default Profile