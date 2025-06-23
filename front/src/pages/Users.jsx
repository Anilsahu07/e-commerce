import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, updatedUsers } from '../actions/UserAction'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'


const Users = () => {
    const {users}= useSelector(state=>state.user)
    const dispatch= useDispatch()
    const navigate= useNavigate()
    console.log(users);
    
    const deletedUser=(id)=>{
        console.log(id);
        dispatch(deleteUsers(id))
        toast.success("User Deleted")
    }

    const updateingUser=(id)=>{
        navigate(`/userupdate/${id}`)
    }

  return (
    <div className='p-3 w-screen text-whit border-t-2'>
        <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='lg:text-3xl text-3xl font-bold text-black font-[montserrat]'>USER's PROFILE</h1>
            <div className=' w-screen border-t-4 border-yellow-500 p-2 flex flex-wrap justify-center gap-3'>
                {users.map((users,index)=>(
                    <ul key={index} className='w-fit flex justify-center flex-wrap mt-5'>
                        <li className='w-full lg:w-fit flex flex-col items-center text-center bg-black p-3 rounded-xl font-[poppins] gap-3 text-white hover:scale-95 transition-all duration-300'>
                            <img className='w-32 h-32 rounded-full' src={users.image} alt="" />
                            <h1 className='flex lg:gap-3 gap-2 items-center'><strong className='text-white text-opacity-100 text-xl'>USERNAME:</strong>{users.username}</h1>
                            <p className='flex gap-3 items-center'><strong className='text-white text-opacity-100 text-xl'>EMAIL:</strong>{users.email}</p>
                            <p className='flex gap-3 items-center'><strong className='text-white text-opacity-100 text-xl'>PASSWORD:</strong>{"*".repeat(users.password?.length)}</p>
                            <div className='w-full flex justify-around mt-4'>
                                <button type='button' className='px-3 py-2 bg-black text-white text-sm rounded font-[montserrat] hover:bg-white hover:text-black hover:font-normal outline' onClick={()=>deletedUser(users.id)}>Delete</button>
                                <button onClick={()=>updateingUser(users.id)} type='button' className='px-3 py-2 bg-black text-white text-sm rounded font-[montserrat] hover:bg-white hover:text-black hover:font-normal outline'>Edit</button>
                            </div>
                        </li>
                    </ul>
                  
                ))}
            </div>
        </div>
    </div>
  )
}

export default Users