import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { logout } from '../features/UserSlice'
import {gsap} from 'gsap'
import { toast } from 'react-toastify'


const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  const {user}= useSelector(state=>state.user)
  const dispatch= useDispatch()
  const navigate=useNavigate()

  const logoutUser=()=>{
   dispatch(logout())
   navigate("/signin")
   toast.success("User Logged out!!")
   console.log("User Logged out");
  }
  
  const handleToggle=()=>{
    settoggle(!toggle)
    console.log("anil");
    
  }

  const divRef= useRef(null)


  gsap.to(divRef.current,{
    y:71.5,
    duration:0.3
  })
  

  return (
    <div className='flex items-center gap-10 bg-black  lg:h-18 h-18 font-[poppins] text-white lg:w-screen w-screen'>
      {user?<div className='w-full flex lg:justify-around justify-start gap-10 items-center lg:p-4 p-4'>
        <div>
          <NavLink className={` active:text-red-400 flex-none hidden lg:flex`} to='/'>Home</NavLink>
        </div>

        <div className='flex items-center gap-10 relative'> 
           <NavLink className={`active:scale-95 active:text-red-400 hidden lg:flex`} to='/about'>About</NavLink>
           <NavLink className={`active:scale-95 active:text-red-400 flex lg:relative lg:left-0 relative -left-1/3 lg`} to='/cart'>
           <i className="ri-shopping-cart-fill text-4xl text-green-500"></i>
           </NavLink>
           <NavLink className={`active:scale-95 active:text-red-400`} to={`/search`}>
            <i class="ri-search-line text-3xl"></i>
           </NavLink>
        </div>
        <div>
            <NavLink onClick={logoutUser} className='bg-red-400 text-white px-3 py-2 rounded lg:flex hidden'>Logout</NavLink>
        </div>
      
       <NavLink onClick={handleToggle} className='bg-black text-white px-1.5 py-0.5 rounded lg:hidden flex flex-col outline outline-white absolute right-3'>
          {toggle?<i class="ri-menu-3-line text-2xl"></i>: <i class="ri-menu-line text-2xl"></i> }
       </NavLink>
       <div ref={divRef} className='flex flex-col  absolute right-0 top-0'>
          <p className='hidden'></p>
           {toggle&&<div className='text-white flex flex-col bg-black w-full items-center p-6 lg:p-0 h-fit gap-4'>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/'>Home</NavLink>
              <NavLink onClick={() => settoggle(false)} className={`active:scale-95 active:text-red-400 lg:hidden`} to='/about'>About</NavLink>
              <NavLink onClick={() => settoggle(false)} className={` active:text-red-400 lg:hidden`} to='/create'>Create Product</NavLink>
              <NavLink onClick={() =>{logoutUser(); settoggle(false)}} className='text-white bg-green-500 z-* p-2 rounded lg:hidden'>Logout</NavLink>
            </div>}
       </div>
      </div>
      :
      <div className='w-full flex justify-center lg:p-4 p-6 items-center gap-10'>
         <NavLink className={`active:scale-95 active:text-red-400 lg:text-xl text-xl`} to='/signin'>Signin</NavLink>
       <NavLink className={`active:scale-95 active:text-red-400 lg:text-xl text-xl`} to='/users'>Users</NavLink>
       {/* <NavLink className={`active:scale-95 active:text-red-400`} to='/signup'>Signup</NavLink> */}
        <NavLink className={`active:scale-95 active:text-red-400 lg:flex hidden lg:text-xl`} to='*'>PageNotFound</NavLink>
         </div>}
        

       
        
    </div>
    
  )
}

export default Navbar